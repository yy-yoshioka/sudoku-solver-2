import { cellArr } from '../settings/variables.js';
import { reducerOptions, objectFilter, reducerRowCol } from './twoPairArray.js';
import { boxRowColChecker } from './boxRowColCheck.js';
import { concatArrays } from '../settings/arrays.js';
import { fillNumbers } from '../fillNumber/fillNumbers.js';
import { boxRowColCtr } from './boxRowColController.js';

const twoPairMain = (result) => {
  let getRes = result;
  const boxAll = getRes.map((item) => item.options).reduce(reducerOptions, {});
  const newBoxAll = objectFilter(boxAll);

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

    for (let i = 0; i < getOptions.length - 1; i++) {
      for (let j = i + 1; j < getOptions.length; j++) {
        let resOption = [];
        resOption.push(getOptions[i]);
        resOption.push(getOptions[j]);

        const resCellId1 = resOption[0].id;
        const resCellId2 = resOption[1].id;
        const resCellBox1 = resOption[0].box;
        const resCellBox2 = resOption[1].box;
        const resCellRow1 = resOption[0].row;
        const resCellRow2 = resOption[1].row;
        const resCellCol1 = resOption[0].col;
        const resCellCol2 = resOption[1].col;

        const reducedResult = boxRowColCtr(getRes, resOption, key);

        getRes = reducedResult;

        //   const sameBox = resOption
        //     .map((char) => char.box)
        //     .reduce(reducerRowCol, {});
        //   const sameRow = resOption
        //     .map((char) => char.row)
        //     .reduce(reducerRowCol, {});
        //   const sameCol = resOption
        //     .map((char) => char.col)
        //     .reduce(reducerRowCol, {});

        //   const newSameBox = objectFilter(sameBox);
        //   const newSameRow = objectFilter(sameRow);
        //   const newSameCol = objectFilter(sameCol);

        //   const boxRowColRes = boxRowColChecker(
        //     getRes,
        //     newSameBox,
        //     newSameRow,
        //     newSameCol,
        //     resCellId1,
        //     resCellId2
        //   );

        //   if (boxRowColRes.length !== 0) {
        //     arr = arr.concat(boxRowColRes);
        //     getRes = concatArrays(getRes, arr);
        //     const empty = getRes.filter((item) => item.options.length === 0);
        //     console.log(empty);
        //   }
      }
    }
  }

  const res = fillNumbers(getRes);
  const empty = res.filter((item) => item.options.length === 0);
  console.log(empty);

  return res;
};

export { twoPairMain };
