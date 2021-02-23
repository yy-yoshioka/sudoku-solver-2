import { result } from '../main.js';
import { difference, concatArrays } from './settings/arrays.js';
import { cellArr } from './settings/variables.js';

let sampleArr = [
  { box: 1, arr: [1, 2, 3, 4, 5, 6, 5, 4, 32, 1] },
  { box: 1, arr: [1, 2, 3, 4, 5, 6, 5, 4, 32, 1] },
  { box: 1, arr: [1, 2, 3, 4, 5, 6, 5, 4, 32, 1] },
  { box: 1, arr: [1, 2, 3, 4, 5, 1] },
  { box: 2, arr: [5, 5, 5, 5, 6] },
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

let concatArr2 = [
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

const concatArr = (arr, concatArr) => {
  let totalArr = concatArr;
  arr.forEach((el) => {
    let box = +el.box - 1;
    let option = el.arr;

    let arrNum = box;
    let array = totalArr[arrNum];

    array.arr = array.arr.concat(option);

    return totalArr;
  });

  return totalArr;
};

const concatRes = concatArr(sampleArr, concatArr2);
// console.log(concatRes);

const getEachNumber = (arr) => {
  let filter = [];

  arr.forEach((el) => {
    // console.log(el.box);
    let boxNum = +el.box;

    const filterArr = arr.filter((item) => item.box === boxNum);
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

// const res = getEachNumber(concatRes);
// console.log(res);

const data = {
  code: 42,
  items: [
    {
      id: 1,
      name: 'foo',
    },
    {
      id: 2,
      name: [],
    },
  ],
};

const item_name = data['items'][1]['name'];
// console.log(item_name);

let sampleArr2 = [
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

let z = 0;
const getSampleArr = sampleArr2[z]['arr'];
// console.log(getSampleArr);
const filteredArr = sampleArr.filter((item) => item.box === 1);

// sudoku strategy

// console.log(result);

const twoPair = async () => {
  let getRes = await result;

  const reducerOptions = (map, val) => {
    if ((map[val] == null) & (val.length === 2)) {
      map[val] = 1;
    } else if (map[val] !== undefined) {
      ++map[val];
    }
    return map;
  };
  const boxAll = getRes.map((item) => item.options).reduce(reducerOptions, {});

  // https://stackoverflow.com/questions/25421233/javascript-removing-undefined-fields-from-an-object
  const objectFilter = (obj) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === 1) {
        delete obj[key];
      }
    });
    return obj;
  };

  const newBoxAll = objectFilter(boxAll);
  // console.log(newBoxAll);

  let arr = [];
  const reducerRowCol = (map, val) => {
    if (map[val] == null) {
      map[val] = 1;
    } else if (map[val] !== undefined) {
      ++map[val];
    }
    return map;
  };
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
    const sameBox = getOptions
      .map((char) => char.box)
      .reduce(reducerRowCol, {});
    const sameRow = getOptions
      .map((char) => char.row)
      .reduce(reducerRowCol, {});
    const sameCol = getOptions
      .map((char) => char.col)
      .reduce(reducerRowCol, {});

    const newSameBox = objectFilter(sameBox);
    const newSameRow = objectFilter(sameRow);
    const newSameCol = objectFilter(sameCol);
    // console.log(getOptions[0].options);

    const boxRowColRes = boxRowColChecker(
      getRes,
      newSameBox,
      newSameRow,
      newSameCol
    );

    arr = arr.concat(boxRowColRes);
    // console.log(arr);
    getRes = concatArrays(getRes, arr);
  }
  const box9 = getRes.filter(
    (item) => item.box === 9 && item.options.length !== 1
  );
  console.log(box9);

  return getRes;
};

const differenceArr = (resBoxRowColOptions, reduceArr) => {
  // console.log(resBoxRowColOptions);
  const newCell = resBoxRowColOptions.reduce((newArr, item) => {
    let optionsArr = item.options;
    let difference = optionsArr.filter((x) => !reduceArr.includes(x));
    let obj = {};
    obj = {
      id: item.id,
      box: item.box,
      cell: item.cell,
      row: item.row,
      col: item.col,
      options: difference,
      value: item.value,
    };
    newArr.push(obj);
    return newArr;
  }, []);
  return newCell;
};

// check box && row && col
const boxRowColChecker = (getRes, boxArray, rowArray, colArray) => {
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
    const resBoxOptions = boxOptionsReduce(getRes, boxRowFilter);
    let resBox = [];
    resBox = differenceArr(resBoxOptions, reducedArr);
    resultArr = resultArr.concat(resBox);

    // call rowOptionReduce
    const resRowOptions = rowOptionsReduce(getRes, boxRowFilter);
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
    const resBoxOptions = boxOptionsReduce(getRes, boxColFilter);
    resBox = differenceArr(resBoxOptions, reducedArr);
    resultArr = resultArr.concat(resBox);

    // call colOptionsReduce
    let resCol = [];
    const resColOptions = colOptionsReduce(getRes, boxColFilter);
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
    const resColOptions = colOptionsReduce(getRes, colFilter);
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
    const resRowOptions = rowOptionsReduce(getRes, rowFilter);
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
    const resBoxOptions = boxOptionsReduce(getRes, boxFilter);
    resBox = differenceArr(resBoxOptions, reducedArr);
    resultArr = resultArr.concat(resBox);
    return resultArr;
  } else {
    return [];
  }

  // console.log(cellArr);
};
// https://stackoverflow.com/questions/1078118/how-do-i-iterate-over-a-json-structure
const getKey = (arr) => {
  let keyNum = '';
  for (let key in arr) {
    keyNum = +key;
  }
  return keyNum;
};

const boxOptionsReduce = (cellArray, boxFilterArray) => {
  const boxNum = boxFilterArray[0].box;
  const boxCell1 = boxFilterArray[0].id;
  const boxCell2 = boxFilterArray[1].id;

  const getBoxOptions = cellArray.filter(
    (item) =>
      item.box === boxNum &&
      item.id !== boxCell1 &&
      item.id !== boxCell2 &&
      item.options.length !== 1
  );
  return getBoxOptions;
};

const rowOptionsReduce = (cellArray, rowFilterArray) => {
  const rowNum = +rowFilterArray[0].row;
  const cell1 = rowFilterArray[0].id;
  const cell2 = rowFilterArray[1].id;

  const getRowOptions = cellArray.filter(
    (item) =>
      item.row === rowNum &&
      item.id !== cell1 &&
      item.id !== cell2 &&
      item.options.length !== 1
  );
  return getRowOptions;
};

const colOptionsReduce = (cellArray, colFilterArray) => {
  const colNum = +colFilterArray[0].col;
  const cell1 = colFilterArray[0].id;
  const cell2 = colFilterArray[1].id;

  const getColOptions = cellArray.filter(
    (item) =>
      item.col === colNum &&
      item.id !== cell1 &&
      item.id !== cell2 &&
      item.options.length !== 1
  );
  return getColOptions;
};

// const resArr = twoPair();

var wizards = [
  {
    name: 'Harry Potter',
    house: 'Gryfindor',
    arr: [1, 2, 3],
  },
  {
    name: 'Cedric Diggory',
    house: 'Hufflepuff',
    arr: [1, 2, 3, 4, 5],
  },
  {
    name: 'Tonks',
    house: 'Hufflepuff',
    arr: [1, 4, 5],
  },
  {
    name: 'Ronald Weasley',
    house: 'Gryfindor',
    arr: [2, 3, 4, 5],
  },
  {
    name: 'Hermione Granger',
    house: 'Gryfindor',
    arr: [1, 2, 3, 4, 5],
  },
];

var hufflePuff = wizards
  .filter(function (wizard) {
    return wizard.house === 'Hufflepuff';
  })
  .map(function (wizard) {
    return wizard.name;
  });

// console.log(hufflePuff);

let sampleArr1 = wizards.filter((item) => {
  return item.arr.length === 5;
});

// console.log(sampleArr1);

var hufflepuff2 = wizards.reduce(function (newArr, wizard) {
  if (wizard.house === 'Hufflepuff') {
    newArr.push(wizard.name);
  }
  return newArr;
}, []);

// console.log(hufflepuff2);
let array1 = [2, 3];
// resArr.then((resArray) => {
//   const newCell = resArray.reduce((newArr, item) => {
//     let array2 = item.options;
//     let difference = array2.filter((x) => !array1.includes(x));
//     let obj = {};
//     obj = {
//       id: item.id,
//       box: item.box,
//       cell: item.cell,
//       row: item.row,
//       col: item.col,
//       options: difference,
//       value: item.value,
//     };
//     newArr.push(obj);
//     return newArr;
//   }, []);
//   // console.log(newCell);
//   return newCell;
// });

// array remove by value
// https://stackoverflow.com/questions/3954438/how-to-remove-item-from-array-by-value

var array = [6, 1, 2, 3, 4, 5];
var item = 3;

var index = array.indexOf(item);
array.splice(index, 1);

console.log(array);

const fillingNum = async () => {
  const res = await result;
  // console.log(res);
  const resBox3 = res.filter((item) => item.box === 3);
  const newArr = res.map((item) => {
    if (item.options.length === 1 && item.cell.lastChild.innerHTML === '') {
      console.log(item.cell);
      console.log(item.options[0]);
      item.cell.lastChild.innerHTML = item.options[0];
    }
    return item;
  });

  return newArr;
};

fillingNum();
var array = [1, 2, 3, 4, 6, 7, 8, 9, 0];
var filtered = array.filter((value) => {
  return value != 5;
});

// console.log(filtered);
