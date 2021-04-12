import {
  reducerOptions,
  objectFilter,
} from '../twoPairOptions/twoPairArray.js';

import { concatArrays } from '../settings/arrays.js';
let tempArr = [];
let storeMainArr = [];
const tempMain = async (mainArr) => {
  console.log(tempArr);
  const pairList = mainArr.filter((item) => item.options.length === 2);

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

  // temporary put number
  const copyArr = newArr[0];
  const cop = { ...copyArr };

  const number = copyArr.options[0];

  let tempObj = {};
  tempObj = {
    cell: cop,
    tempNumber: number,
  };

  tempArr.push(tempObj);
  localStorage.setItem('temCellNum', JSON.stringify(tempArr));
  copyArr.options = [number];
  const resArray = concatArrays(mainArr, copyArr);
  return resArray;
};

export { tempMain };
