import { resRowArr, resColArr } from '../settings/variables.js';
import {
  initArr,
  concatRowArr,
  getRowEachNumber,
  concatColArr,
  getColEachNumber,
} from '../settings/arrays.js';
import { xWingRowReduce } from './xWingRow.js';
import { xWingColReduce } from './xWingCol.js';
import { concatArrays } from '../settings/arrays.js';

const xWingReduce = (cellArr) => {
  const filterCellArr = cellArr.filter((item) => item.options.length !== 1);

  let rowArr = initArr(resRowArr);
  let colArr = initArr(resColArr);

  const rowRes = concatRowArr(filterCellArr, rowArr);
  const rowEachNum = getRowEachNumber(rowRes);
  const xWingRowRes = xWingRowReduce(cellArr, rowEachNum);
  const arr = xWingRowRes;

  const filterCellArr2 = arr.filter((item) => item.options.length !== 1);
  const colRes = concatColArr(filterCellArr2, colArr);
  const colEachNum = getColEachNumber(colRes);
  const xWingColRes = xWingColReduce(cellArr, colEachNum);

  return xWingColRes;
};

export { xWingReduce };
