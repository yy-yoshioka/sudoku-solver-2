import {
  boxArr,
  rowArr,
  colArr,
  concatArr,
  cellArr,
} from './js/settings/variables.js';
import { countNumber } from './js/settings/countNumbers.js';
import {
  getBoxArr,
  getRowArr,
  getColArr,
  concatBox,
  initArr,
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
import { identicalColReduce } from './js/identicalDirection/identicalCol.js';

const main = async (cellArray, boxArray, rowArray, colArray, concatBox) => {
  for (let i = 0; i < 100; i++) {
    console.log(+`${i}` + 1);
    const box8 = cellArray.filter((item) => item.box === 8);
    console.log(box8);
    // ! 1
    // count filled Number
    const countBegin = countNumber(cellArray);
    // get BoxList && rowList && colList
    const boxList = getBoxArr(cellArray, boxArray);
    const rowList = getRowArr(cellArray, rowArray);
    const colList = getColArr(cellArray, colArray);
    // reduce Options by boxList && rowList && colList
    const reduceByBoxArr = reduceOptionsBox(cellArray, boxList);
    const reduceByRowArr = reduceOptionsRow(reduceByBoxArr, rowList);
    const reduceByColArr = reduceOptionsCol(reduceByRowArr, colList);
    // fill Number to cell
    const fillNum = fillNumbers(reduceByColArr);
    const fil = fillNum.filter(
      (item) =>
        item.options.length !== 1 && item.cell.lastChild.innerHTML !== ''
    );
    console.log(fil);
    const box = initArr(concatBox);
    // get unique number in the box
    const uniqueBoxOption = uniqueOptionInBox(fillNum, box);
    // fill number to the cell
    const uniqueArr = fillNumberUniqueBox(fillNum, uniqueBoxOption);
    // reduce by two pair
    const twoPair = twoPairMain(uniqueArr);
    const pairRes = twoPair;

    // count filled Number
    const countEnd = countNumber(pairRes);

    cellArray = pairRes;

    if (countBegin === countEnd) {
      if (countEnd !== 81) {
        let leftNum = 81 - countEnd;

        // console.log(leftNum);
        // reduce by number in the same row or col
        // reduce by row && col
        // const ReduceIdenticalRowCol = identicalRowCol(pairRes);

        break;
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
