import { cellArr, resBoxArr } from '../js/settings/variables.js';
import {
  initArr,
  getBoxEachNumber,
  concatBoxArr,
} from '../js/settings/arrays.js';

import { identicalRowReduce } from '../js/identicalDirection/identicalRow.js';
import { identicalColReduce } from '../js/identicalDirection/identicalCol.js';
import { concatArrays } from '../js/settings/arrays.js';
import { fillNumbers } from '../js/fillNumber/fillNumbers.js';
import { result } from '../main.js';

const identicalRowCol1 = async () => {
  let boxAll = await result;

  const resBox = initArr(resBoxArr);
  const res = concatBoxArr(boxAll, resBox);
  const eachNumRes = getBoxEachNumber(res);

  const resultArr = eachNumRes.map((obj) => {
    Object.keys(obj).forEach((key) =>
      obj[key] === 1 || obj[key] > 3 ? delete obj[key] : {}
    );
    return obj;
  });
  // X53 [3,4]
  // X61 [1,4]

  resultArr.forEach((el, index) => {
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
  const box1 = boxAll.filter((item) => item.box === 1);
  const box2 = boxAll.filter((item) => item.box === 2);
  const box3 = boxAll.filter((item) => item.box === 3);
  const box4 = boxAll.filter((item) => item.box === 4);
  const box5 = boxAll.filter((item) => item.box === 5);
  const box6 = boxAll.filter((item) => item.box === 6);
  const box7 = boxAll.filter((item) => item.box === 7);
  const box8 = boxAll.filter((item) => item.box === 8);
  const box9 = boxAll.filter((item) => item.box === 9);
};

identicalRowCol1();

// console.log('hi');

// local storage

const num = [{ id: 1, number: 1, cell: { id: 1 } }];
const num2 = [{ id: 2, number: 2, cell: { id: 2 } }];
let number = [];
number = number.concat(num);

// console.log(number);
let copyNum2 = Array.from(num);
let copyNum = [...num];

// store data

// localStorage.setItem('num', JSON.stringify(number));
// number = number.concat(num2);
// localStorage.setItem('num', JSON.stringify(number));

// get data

// let getDataFromLs = JSON.parse(localStorage.getItem('num'));
// console.log(getDataFromLs);

// delete last data
// let newData = getDataFromLs.pop();
// console.log(getDataFromLs);
// localStorage.setItem('num', JSON.stringify(getDataFromLs));

// console.log(newData);

num[0].id = 2;
