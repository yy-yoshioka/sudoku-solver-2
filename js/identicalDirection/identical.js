import { identicalReducerOptions } from './identicalDirectionArray.js';
import { boxArr } from '../settings/variables.js';
import { initArr, getBoxEachNumber, concatBoxArr } from '../settings/arrays.js';
import { identicalRowReduce } from './identicalRow.js';
import { identicalColReduce } from './identicalCol.js';
import { concatArrays } from '../settings/arrays.js';
import { fillNumbers } from '../fillNumber/fillNumbers.js';

const identicalRowCol = (cellArr) => {
  console.log(cellArr);
  const boxAll = cellArr;

  const resBox = initArr(boxArr);
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
      const targetBox = cellArr.filter((item) => item.box === boxNum);
      // console.log(targetNum);
      // console.log(key);

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
        const arrayRes = identicalRowReduce(cellArr, box, row, number);
        // console.log(arrayRes);
        cellArr = concatArrays(cellArr, arrayRes);
      } else if (colRes === true) {
        const col = colNumber;

        const arrayRes = identicalColReduce(cellArr, box, col, number);
        // console.log(arrayRes);
        cellArr = concatArrays(cellArr, arrayRes);
      } else {
        // console.log('not in the same row or col');
      }
    }
  });
  console.log(cellArr);

  const box1 = cellArr.filter((item) => item.box === 1);
  const box2 = cellArr.filter(
    (item) => item.box === 2 && item.options.length !== 1
  );
  const box3 = cellArr.filter(
    (item) => item.box === 3 && item.options.length !== 1
  );
  const box4 = cellArr.filter((item) => item.box === 4);
  const box5 = cellArr.filter((item) => item.box === 5);
  const box6 = cellArr.filter((item) => item.box === 6);
  const box7 = cellArr.filter((item) => item.box === 7);
  const box8 = cellArr.filter((item) => item.box === 8);
  const box9 = cellArr.filter((item) => item.box === 9);

  console.log(box2);

  const resultArr = fillNumbers(cellArr);
  const box11 = resultArr.filter((item) => item.box === 1);
  const box21 = resultArr.filter(
    (item) => item.box === 2 && item.options.length !== 1
  );
  const box31 = resultArr.filter(
    (item) => item.box === 3 && item.options.length !== 1
  );
  const box41 = resultArr.filter((item) => item.box === 4);
  const box51 = resultArr.filter((item) => item.box === 5);
  const box61 = resultArr.filter((item) => item.box === 6);
  const box71 = resultArr.filter((item) => item.box === 7);
  const box81 = resultArr.filter((item) => item.box === 8);
  const box91 = resultArr.filter((item) => item.box === 9);
  console.log(box21);

  const checkRes = resultArr.filter(
    (item) => item.options.length === 1 && item.cell.lastChild.innerHTML === ''
  );
  console.log(checkRes);

  return resultArr;
};

export { identicalRowCol };
