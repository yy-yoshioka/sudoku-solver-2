import { cellArr } from '../settings/variables.js';
import { reducerOptions, objectFilter, reducerRowCol } from './twoPairArray.js';
import { boxRowColChecker } from './boxRowColCheck.js';
import { concatArrays } from '../settings/arrays.js';

const twoPairMain = (result) => {
  let getRes = result;

  const boxAll = getRes.map((item) => item.options).reduce(reducerOptions, {});

  const newBoxAll = objectFilter(boxAll);

  let arr = [];
  let cellArray = [];
  cellArray = cellArr;

  for (let key in newBoxAll) {
    let num1 = +key.split(',')[0];
    let num2 = +key.split(',')[1];

    const getOptions = getRes.filter(
      (item) =>
        item.options.includes(num1) &&
        item.options.includes(num2) &&
        item.options.length === 2
    );
    const sameBox = getOptions
      .map((char) => char.box)
      .reduce(reducerRowCol, {});
    const sameRow = getOptions
      .map((char) => char.row)
      .reduce(reducerRowCol, {});
    const sameCol = getOptions
      .map((char) => char.col)
      .reduce(reducerRowCol, {});

    const newSameBox = objectFilter(sameBox);
    const newSameRow = objectFilter(sameRow);
    const newSameCol = objectFilter(sameCol);
    // console.log(getOptions[0].options);

    const boxRowColRes = boxRowColChecker(
      getRes,
      newSameBox,
      newSameRow,
      newSameCol
    );

    arr = arr.concat(boxRowColRes);
    getRes = concatArrays(getRes, arr);
  }

  return getRes;
};

export { twoPairMain };
