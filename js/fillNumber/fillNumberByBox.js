import { concatArrays } from '../settings/arrays.js';
import { fillNumbers } from './fillNumbers.js';

const fillNumberUniqueBox = (arr, concatBoxResult) => {
  let concatResObj = {};
  let concatResArr = [];
  concatBoxResult.forEach((el, index) => {
    // find unique number in the box
    for (const [key, value] of Object.entries(el)) {
      if (value === 1) {
        let boxNum = +index + 1;
        let targetNum = +key;
        const filterArr = arr.filter(
          (item) =>
            item.box === boxNum &&
            item.options.includes(targetNum) &&
            item.options.length !== 1
        );
        if (filterArr.length !== 0) {
          concatResObj = {};
          concatResObj = {
            id: filterArr[0].id,
            box: filterArr[0].box,
            cell: filterArr[0].cell,
            row: filterArr[0].row,
            col: filterArr[0].col,
            options: [targetNum],
            value: filterArr[0].value,
          };
          concatResArr.push(concatResObj);
        }
      }
    }
  });

  const resultArr = concatArrays(arr, concatResArr);
  const res = fillNumbers(resultArr);

  return res;
};

export { fillNumberUniqueBox };
