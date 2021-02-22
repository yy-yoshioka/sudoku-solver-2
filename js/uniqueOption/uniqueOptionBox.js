import { fillNumberUniqueBox } from '../fillNumber/fillNumberByBox.js';
import { concatBoxArr, getBoxEachNumber } from '../settings/arrays.js';

const uniqueOptionInBox = (arr, concatArr) => {
  const boxArr = concatArr;

  // const filterArr = arr.filter((item) => item.options.length !== 1);
  const filterArr = arr;
  const concatRes = concatBoxArr(filterArr, boxArr);

  const concatBoxRes = getBoxEachNumber(concatRes);
  fillNumberUniqueBox(filterArr, concatBoxRes);

  return concatBoxRes;
};

export { uniqueOptionInBox };
