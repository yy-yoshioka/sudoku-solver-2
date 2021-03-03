import {
  reducerOptions,
  objectFilter,
  reducerRowCol,
  getKey,
} from '../twoPairOptions/twoPairArray.js';

import { concatArrays } from '../settings/arrays.js';

const tempMain = async (arr, mainArr) => {
  const boxAll = arr.map((item) => item.options).reduce(reducerOptions, {});
  const newBoxAll = objectFilter(boxAll);
  const copyMainArr = [...mainArr];

  let newArr = [];

  for (let key in newBoxAll) {
    let num1 = +key.split(',')[0];
    let num2 = +key.split(',')[1];

    const getOptions = arr.filter(
      (item) =>
        item.options.includes(num1) &&
        item.options.includes(num2) &&
        item.options.length === 2
    );

    newArr = getOptions;
  }

  const putNumRes = putNum(arr, newArr[0], newArr[0].options[0]);
  const resArray = concatArrays(mainArr, putNumRes);
  return resArray;
};

const putNum = (arr, cell, number) => {
  const copyArr = [...arr];
  const copyObj = { ...cell };

  const num = copyObj.options[0];
  copyObj.options = [];
  copyObj.options.push(num);
  const newArr = concatArrays(copyArr, copyObj);

  return newArr;
};

export { tempMain };
