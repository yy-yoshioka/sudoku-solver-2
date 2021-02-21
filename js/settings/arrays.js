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

const concatArrays = (arrayList1, arrayList2) => {
  const result1 = Object.values(
    []
      .concat(arrayList1, arrayList2)
      .reduce((r, c) => ((r[c.id] = Object.assign(r[c.id] || {}, c)), r), {})
  );
  return result1;
};

let sampleArr = [
  { box: 1, arr: [1, 2, 3, 4, 5, 6, 5, 4, 32, 1] },
  { box: 2, arr: [5, 5, 5, 5, 6, 5, 4, 32, 1, 2] },
  { box: 3, arr: [1, 2, 3, 4, 5, 6, 2, 3, 2, 3, 2] },
  { box: 4, arr: [1, 2, 3, 4, 1, 1, 12, 2, 3, 4, 1] },
];

let emptyArr = [
  { box: 1, arr: [], obj: {} },
  { box: 2, arr: [], obj: {} },
  { box: 3, arr: [], obj: {} },
  { box: 4, arr: [], obj: {} },
  { box: 5, arr: [], obj: {} },
  { box: 6, arr: [], obj: {} },
  { box: 7, arr: [], obj: {} },
  { box: 8, arr: [], obj: {} },
  { box: 9, arr: [], obj: {} },
];

const concatBox = [
  {
    box: 1,
    arr: [],
  },
  {
    box: 2,
    arr: [],
  },
  {
    box: 3,
    arr: [],
  },
  {
    box: 4,
    arr: [],
  },
  {
    box: 5,
    arr: [],
  },
  {
    box: 6,
    arr: [],
  },
  {
    box: 7,
    arr: [],
  },
  {
    box: 8,
    arr: [],
  },
  {
    box: 9,
    arr: [],
  },
];

// https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
const difference = (arr1, fillNum) => {
  let difference = [];
  let differenceArr = [];
  let differenceObj = {};
  let fillNumber = [];
  let resArray = [];
  fillNumber = fillNum.map((el) => {
    let box = el.box;
    let number = el.options[0];
    let optionArr = el.options;

    const filteredArr = arr1.filter(
      (item) =>
        item.box === box &&
        item.options.includes(number) &&
        item.options.length !== 1
    );

    if (filteredArr.length !== 0) {
      differenceArr = filteredArr.map((el) => {
        let id = el.id;
        let box = el.box;
        let cell = el.cell;
        let row = el.row;
        let col = el.col;
        let value = el.value;

        let optionsArr = el.options;
        difference = optionsArr.filter((x) => !optionArr.includes(x));

        differenceObj = {};
        differenceObj = {
          id,
          box,
          cell,
          row,
          col,
          options: difference,
          value,
        };

        resArray.push(differenceObj);
        return differenceObj;
      });
    }
    return resArray;
  });

  return resArray;
};

export {
  getBoxArr,
  getRowArr,
  getColArr,
  concatArrays,
  initArr,
  emptyArr,
  concatBox,
  difference,
  // getOptionsEachNum,
  // getEachNumber,
};
