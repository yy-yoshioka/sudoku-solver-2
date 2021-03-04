import {
  reducerOptions,
  objectFilter,
} from '../twoPairOptions/twoPairArray.js';

import { concatArrays } from '../settings/arrays.js';

let storeMainArr = [];
const tempMain = async (mainArr) => {
  const copyMainArr = [...mainArr];
  const pairList = copyMainArr.filter((item) => item.options.length === 2);
  const boxAll = pairList
    .map((item) => item.options)
    .reduce(reducerOptions, {});
  const newBoxAll = objectFilter(boxAll);
  storeMainArr.push(mainArr);

  let newArr = [];

  for (let key in newBoxAll) {
    let num1 = +key.split(',')[0];
    let num2 = +key.split(',')[1];

    const getOptions = pairList.filter(
      (item) =>
        item.options.includes(num1) &&
        item.options.includes(num2) &&
        item.options.length === 2
    );

    newArr = getOptions;
  }

  const putNumRes = putNum(pairList, newArr[0], newArr[0].options[0]);

  const historyRes = history(newArr[0], newArr[0].options[0]);
  const log = historyRes[0];
  const logHistory = historyRes[1];
  const resArray = concatArrays(copyMainArr, putNumRes);

  return [resArray, log, copyMainArr, storeMainArr, logHistory];
};

const putNum = (arr, cell, number) => {
  const copyArr = [...arr];
  const copyObj = { ...cell };
  const num = number;
  copyObj.options = [];
  copyObj.options.push(num);
  const newArr = concatArrays(copyArr, copyObj);
  return newArr;
};

let historyArr = [];
const history = (cell, number) => {
  let historyObj = {};
  let copyCell = { ...cell };
  let option = copyCell.options;
  let index = option.indexOf(number);
  option.splice(index, 1);
  historyObj = {};
  historyObj = {
    cell,
    number,
  };
  historyArr = historyArr.concat(historyObj);

  return [copyCell, historyArr];
};

export { tempMain, history };
