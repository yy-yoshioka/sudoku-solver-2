import { identicalReducerOptions } from './identicalDirectionArray.js';
import { boxArr } from '../settings/variables.js';
import { initArr, getBoxEachNumber, concatBoxArr } from '../settings/arrays.js';
import { identicalRowReduce } from './identicalRow.js';
import { identicalColReduce } from './identicalCol.js';

const identicalRowCol = (cellArr) => {
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
  const result1 = result[5];
  // console.log(result1);
  result.forEach((el, index) => {
    // console.log(index);
    for (let key in el) {
      // console.log(key);
    }
  });
  // console.log(result1);
  for (let key in result1) {
    let index = 6;
    console.log(key);
    const targetNum = +key;
    const targetBox = cellArr.filter((item) => item.box === index);

    const targetCells = targetBox.filter((item) =>
      item.options.includes(targetNum)
    );
    let checkRow = targetCells.map((item) => {
      return item.row;
    });
    let checkCol = targetCells.map((item) => {
      return item.col;
    });

    // use every
    let rowNumber = checkRow[0];
    console.log(rowNumber);
    let rowRes = checkRow.every((item) => item === rowNumber);
    let colNumber = checkCol[0];
    let colRes = checkCol.every((item) => item === colNumber);
    let box = 6;
    let number = key;

    if (rowRes === true) {
      console.log('same row');
      let row = +rowNumber;
      console.log('number');
      console.log(number);
      const arrayRes = identicalRowReduce(cellArr, box, row, number);
      console.log(arrayRes);
    } else if (colRes === true) {
      console.log('same col');
      console.log(checkCol);
      let col = +colNumber;
      const arrayRes = identicalColReduce(cellArr, box, col, number);
      console.log(arrayRes);
    }
  }
};

export { identicalRowCol };
