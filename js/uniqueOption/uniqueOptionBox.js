import { fillNumberUniqueBox } from '../fillNumber/fillNumberByBox.js';
import { concatBoxArr, getBoxEachNumber } from '../settings/arrays.js';

const uniqueOptionInBox = (arr, concatArr) => {
  const boxArr = concatArr;

  const filterArr = arr;

  const concatRes = concatBoxArr(filterArr, boxArr);
  const concatBoxRes = getBoxEachNumber(concatRes);
  const fillNumberRes = fillNumberUniqueBox(filterArr, concatBoxRes);

  return fillNumberRes;
};

export { uniqueOptionInBox };
