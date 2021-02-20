import { fillNumberUniqueBox } from '../fillNumber/fillNumberByBox.js';

const uniqueOptionInBox = (arr, concatArr) => {
  const boxArr = concatArr;

  // const filterArr = arr.filter((item) => item.options.length !== 1);
  const filterArr = arr;
  const concatRes = concatBoxArr(filterArr, boxArr);
  const concatBoxRes = getBoxEachNumber(concatRes);
  fillNumberUniqueBox(filterArr, concatBoxRes);

  return concatBoxRes;
};

const concatBoxArr = (arr, concatArr) => {
  const totalArr = concatArr;
  arr.forEach((el) => {
    let box = +el.box - 1;
    let option = el.options;
    let arrNum = box;
    let array = totalArr[arrNum];
    array.arr = array.arr.concat(option);
    return totalArr;
  });

  return totalArr;
};

const getBoxEachNumber = (concatResult) => {
  let filter = [];
  concatResult.forEach((el) => {
    let boxNum = +el.box;
    const filterArr = concatResult.filter((item) => item.box === boxNum);
    const newArray = filterArr[0].arr;
    const newArr = newArray.reduce((acc, curr) => {
      if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
      return acc;
    }, {});
    filter.push(newArr);
  });

  return filter;
};

export { uniqueOptionInBox };
