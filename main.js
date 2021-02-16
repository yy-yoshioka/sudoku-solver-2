import {
  boxArr,
  rowArr,
  colArr,
  concatArr,
  cellArr,
} from './js/settings/variables.js';
import { getBoxArr, getRowArr, getColArr } from './js/settings/arrays.js';

const main = async (cellArray, boxArray, rowArray, colArray, concatArray) => {
  const boxList = getBoxArr(cellArray, boxArray);
  const rowList = getRowArr(cellArray, rowArray);
  const colList = getColArr(cellArray, colArray);

  console.log(boxList);
  console.log(rowList);
  console.log(colList);
};

main(cellArr, boxArr, rowArr, colArr, concatArr);
