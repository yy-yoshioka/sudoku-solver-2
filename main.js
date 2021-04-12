import {
  boxArr,
  rowArr,
  colArr,
  cellArr,
  X11,
} from './js/settings/variables.js';
import { countNumber } from './js/settings/countNumbers.js';
import {
  getBoxArr,
  getRowArr,
  getColArr,
  concatBox,
  initArr,
  concatArrays,
  // getOptionsEachNum,
} from './js/settings/arrays.js';

import { fillNumbers } from './js/fillNumber/fillNumbers.js';
import { fillNumberUniqueBox } from './js/fillNumber/fillNumberByBox.js';
import { reduceOptionsBox } from './js/reduceOptions/reduceByBox.js';
import { reduceOptionsRow } from './js/reduceOptions/reduceByRow.js';
import { reduceOptionsCol } from './js/reduceOptions/reduceByCol.js';
import { uniqueOptionInBox } from './js/uniqueOption/uniqueOptionBox.js';

import { twoPairMain } from './js/twoPairOptions/twoPairMain.js';
import { identicalRowCol } from './js/identicalDirection/identical.js';
import { wingMain } from './js/wing/wingMain.js';
import { tempMain } from './js/temporaryStorage/temporaryMain.js';
import { reAssignNumMain } from './js/temporaryStorage/reAssignMain.js';
import { errorCtrMain } from './js/errorController/errorCtr.js';

let tempArr = [];
const main = async (cellArray, boxArray, rowArray, colArray, concatBox) => {
  let copyArr = [...cellArray];

  for (let i = 0; i < 100; i++) {
    // console.log(+`${i}` + 1);
    // ! 1
    // count filled Number
    const countBegin = countNumber(copyArr);
    // get BoxList && rowList && colList
    const boxList = getBoxArr(copyArr, boxArray);
    const rowList = getRowArr(copyArr, rowArray);
    const colList = getColArr(copyArr, colArray);
    // reduce Options by boxList && rowList && colList
    const reduceByBoxArr = reduceOptionsBox(copyArr, boxList);
    const reduceByRowArr = reduceOptionsRow(reduceByBoxArr, rowList);
    const reduceByColArr = reduceOptionsCol(reduceByRowArr, colList);
    // fill Number to cell
    const fillNum = fillNumbers(reduceByColArr);
    const box = initArr(concatBox);
    // get unique number in the box
    const uniqueBoxOption = uniqueOptionInBox(fillNum, box);
    // fill number to the cell
    const uniqueArr = fillNumberUniqueBox(fillNum, uniqueBoxOption);
    // reduce by two pair
    const twoPair = twoPairMain(uniqueArr);

    const ReduceIdenticalRowCol = identicalRowCol(twoPair);
    const wingArray = wingMain(ReduceIdenticalRowCol);

    // count filled Number
    const countEnd = countNumber(wingArray);
    copyArr = wingArray;

    // const box5 = copyArr.filter((item) => item.box === 5);
    // console.log(box5);

    // error check
    const errorCheck = errorCtrMain(copyArr);
    if (errorCheck === 'error') {
      console.log('error');

      const reAssignArr = reAssignNumMain(copyArr, tempArr);
      fillNumbers(reAssignArr[0]);

      tempArr = reAssignArr[1];
      copyArr = reAssignArr[0];
      // break;
    } else if (errorCheck !== 'error' && countBegin === countEnd) {
      if (countEnd !== 81) {
        let leftNum = 81 - countEnd;
        if (leftNum !== 0) {
          console.log('temporary put number');
          tempArr.push(copyArr);
          // store data to Local Storage
          localStorage.setItem('data', JSON.stringify(tempArr));
          const tempMainRes = await tempMain(copyArr);
          const countNum = countNumber(tempMainRes);
          if (countEnd === countNum) {
            break;
          } else {
            copyArr = tempMainRes;
          }
        }
      } else {
        console.log('done');
        break;
      }
    }
  }
  return cellArray;
};

const result = main(cellArr, boxArr, rowArr, colArr, concatBox);

export { result };
