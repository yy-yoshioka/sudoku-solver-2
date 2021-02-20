import { result } from '../main.js';

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

const getRes = async () => {
  const getRes = await result;
  let mainArr = [];

  for (let i = 1; i < 10; i++) {
    const boxFilter = getRes.filter((item) => item.box === i);
    // console.log(boxFilter);
    // mainArr = mainArr.concat(boxFilter);
  }
  // console.log(mainArr);

  const box1 = getRes.filter((item) => item.box === 1);
  const box2 = getRes.filter((item) => item.box === 2);
  const box3 = getRes.filter((item) => item.box === 3);
  const box4 = getRes.filter((item) => item.box === 4);
  const box5 = getRes.filter((item) => item.box === 5);
  const box6 = getRes.filter((item) => item.box === 6);
  const box7 = getRes.filter((item) => item.box === 7);
  const box8 = getRes.filter((item) => item.box === 8);
  const box9 = getRes.filter((item) => item.box === 9);

  const reducer = (map, val) => {
    if ((map[val] == null) & (val.length === 2)) {
      map[val] = 1;
    } else if (map[val] !== undefined) {
      ++map[val];
    }
    return map;
  };
  const box1Res = box1.map((char) => char.options).reduce(reducer, {});
  const box2Res = box2.map((char) => char.options).reduce(reducer, {});
  const box3Res = box3.map((char) => char.options).reduce(reducer, {});
  const box4Res = box4.map((char) => char.options).reduce(reducer, {});
  const box5Res = box5.map((char) => char.options).reduce(reducer, {});
  const box6Res = box6.map((char) => char.options).reduce(reducer, {});
  const box7Res = box7.map((char) => char.options).reduce(reducer, {});
  const box8Res = box8.map((char) => char.options).reduce(reducer, {});
  const box9Res = box9.map((char) => char.options).reduce(reducer, {});

  console.log(box1Res);
  console.log(box2Res);
  console.log(box3Res);
  console.log(box4Res);
  console.log(box5Res);
  console.log(box6Res);
  console.log(box7Res);
  console.log(box8Res);
  console.log(box9Res);

  // mainArr = mainArr.concat(box1Res);
  // console.log(mainArr);

  // console.log(box1Res)
};

getRes();
