const initArr = (arr) => {
  arr.forEach((el) => {
    el.arr = [];
  });
  return arr;
};

const getBoxArr = (cellArr, boxArr) => {
  let boxArray = initArr(boxArr);

  cellArr.forEach((el) => {
    let boxNum = +el.box - 1;
    let optionNum = el.options[0];
    let optionLen = el.options.length;
    let getBoxNum = boxArray[boxNum];
    let boxOptionArr = getBoxNum.arr;

    if (optionLen === 1) {
      boxOptionArr.push(optionNum);
    }
  });
  return boxArray;
};

const getRowArr = (cellArr, rowArr) => {
  let rowArray = initArr(rowArr);

  cellArr.forEach((el) => {
    let rowNum = +el.row - 1;
    let optionNum = el.options[0];
    let optionLen = el.options.length;
    let getRowNum = rowArray[rowNum];
    let rowOptionArr = getRowNum.arr;

    if (optionLen === 1) {
      rowOptionArr.push(optionNum);
    }
  });
  return rowArray;
};

const getColArr = (cellArr, colArr) => {
  let colArray = initArr(colArr);

  cellArr.forEach((el) => {
    let colNum = +el.col - 1;
    let optionNum = el.options[0];
    let optionLen = el.options.length;
    let getColNum = colArray[colNum];
    let colOptionArr = getColNum.arr;

    if (optionLen === 1) {
      colOptionArr.push(optionNum);
    }
  });

  return colArray;
};

export { getBoxArr, getRowArr, getColArr };
