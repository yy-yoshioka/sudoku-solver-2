import { differenceArr, getKey } from './twoPairArray.js';
import { rowOptionsReduce } from './twoPairRow.js';
import { boxOptionsReduce } from './twoPairBox.js';
import { colOptionsReduce } from './twoPairCol.js';

// check box && row && col
const boxRowColChecker = (
  getRes,
  boxArray,
  rowArray,
  colArray,
  cell1,
  cell2
) => {
  // same Box && same Row
  if (
    Object.keys(boxArray).length !== 0 &&
    Object.keys(rowArray).length !== 0
  ) {
    const boxNum = getKey(boxArray);
    const rowNum = getKey(rowArray);
    const boxRowFilter = getRes.filter(
      (item) =>
        item.box === boxNum && item.row === rowNum && item.options.length === 2
    );

    let resultArr = [];
    // reducedArr
    const reducedArr = boxRowFilter[0].options;
    // call boxOptionReduce
    const resBoxOptions = boxOptionsReduce(getRes, boxRowFilter, cell1, cell2);
    let resBox = [];
    resBox = differenceArr(resBoxOptions, reducedArr);
    resultArr = resultArr.concat(resBox);
    // call rowOptionReduce
    const resRowOptions = rowOptionsReduce(getRes, boxRowFilter, cell1, cell2);
    let resRow = [];
    resRow = differenceArr(resRowOptions, reducedArr);
    resultArr = resultArr.concat(resRow);

    return resultArr;

    // same Box && same Col
  } else if (
    Object.keys(boxArray).length !== 0 &&
    Object.keys(colArray).length !== 0
  ) {
    const boxNum = getKey(boxArray);
    const colNum = getKey(colArray);
    const boxColFilter = getRes.filter(
      (item) =>
        item.box === boxNum && item.col === colNum && item.options.length === 2
    );
    let resultArr = [];
    // reducedArr
    const reducedArr = boxColFilter[0].options;
    // call boxOptionsReduce
    let resBox = [];
    const resBoxOptions = boxOptionsReduce(getRes, boxColFilter, cell1, cell2);
    resBox = differenceArr(resBoxOptions, reducedArr);
    resultArr = resultArr.concat(resBox);

    // call colOptionsReduce
    let resCol = [];
    const resColOptions = colOptionsReduce(getRes, boxColFilter, cell1, cell2);
    resCol = differenceArr(resColOptions, reducedArr);
    resultArr = resultArr.concat(resCol);

    return resultArr;

    // same Col
  } else if (Object.keys(colArray).length !== 0) {
    const colNum = getKey(colArray);
    const colFilter = getRes.filter(
      (item) => item.col === colNum && item.options.length === 2
    );

    let resultArr = [];
    // reducedArr
    const reducedArr = colFilter[0].options;
    // call colOptionsReduce
    let resCol = [];
    const resColOptions = colOptionsReduce(getRes, colFilter, cell1, cell2);
    resCol = differenceArr(resColOptions, reducedArr);
    resultArr = resultArr.concat(resCol);

    return resultArr;

    // same Row
  } else if (Object.keys(rowArray).length !== 0) {
    const rowNum = getKey(rowArray);
    const rowFilter = getRes.filter(
      (item) => item.row === rowNum && item.options.length === 2
    );
    let resultArr = [];
    // reducedArr
    const reducedArr = rowFilter[0].options;
    // call rowOptionsReduce
    let resRow = [];
    const resRowOptions = rowOptionsReduce(getRes, rowFilter, cell1, cell2);
    resRow = differenceArr(resRowOptions, reducedArr);
    resultArr = resultArr.concat(resRow);

    return resultArr;

    // same Box
  } else if (Object.keys(boxArray).length !== 0) {
    const boxNum = getKey(boxArray);
    const boxFilter = getRes.filter(
      (item) => item.box === boxNum && item.options.length === 2
    );
    let resultArr = [];
    // reducedArr
    const reducedArr = boxFilter[0].options;
    // call boxOptionsReduce
    let resBox = [];
    const resBoxOptions = boxOptionsReduce(getRes, boxFilter, cell1, cell2);
    resBox = differenceArr(resBoxOptions, reducedArr);
    resultArr = resultArr.concat(resBox);
    return resultArr;
  } else {
    return [];
  }

  // console.log(cellArr);
};

export { boxRowColChecker };
