import { identicalReducerOptions } from './identicalDirectionArray.js';
import { resBoxArr } from '../settings/variables.js';
import { initArr, getBoxEachNumber, concatBoxArr } from '../settings/arrays.js';
import { identicalRowReduce } from './identicalRow.js';
import { identicalColReduce } from './identicalCol.js';
import { concatArrays } from '../settings/arrays.js';
import { fillNumbers } from '../fillNumber/fillNumbers.js';

const identicalRowCol = (cellArr, i = 1) => {
  let boxAll = cellArr;
  console.log('identical file');
  if (i === 4) {
    const box2 = boxAll.filter((item) => item.box === 2 && item.id === '53');
    console.log(box2[0].options);
    console.log(box2[0]);
  }

  const resBox = initArr(resBoxArr);
  const res = concatBoxArr(boxAll, resBox);
  const eachNumRes = getBoxEachNumber(res);

  const result = eachNumRes.map((obj) => {
    Object.keys(obj).forEach((key) =>
      obj[key] === 1 || obj[key] > 3 ? delete obj[key] : {}
    );
    return obj;
  });
  // console.log(result);

  result.forEach((el, index) => {
    let obj = el;
    let boxNum = +index + 1;

    for (const key in obj) {
      const targetNum = +key;
      const targetBox = boxAll.filter((item) => item.box === boxNum);
      const targetCells = targetBox.filter((item) =>
        item.options.includes(targetNum)
      );
      const checkRow = targetCells.map((item) => {
        return item.row;
      });
      const checkCol = targetCells.map((item) => {
        return item.col;
      });

      // use every
      const rowNumber = checkRow[0];
      const rowRes = checkRow.every((item) => item === rowNumber);
      const colNumber = checkCol[0];
      const colRes = checkCol.every((item) => item === colNumber);
      const box = boxNum;
      const number = key;

      if (rowRes === true) {
        const row = rowNumber;
        const arrayRes = identicalRowReduce(boxAll, box, row, number);
        // console.log(arrayRes);
        boxAll = concatArrays(boxAll, arrayRes);
      } else if (colRes === true) {
        const col = colNumber;

        const arrayRes = identicalColReduce(boxAll, box, col, number);
        // console.log(arrayRes);
        boxAll = concatArrays(boxAll, arrayRes);
      }
    }
  });

  const resultArr = fillNumbers(cellArr);

  return resultArr;
};

export { identicalRowCol };
