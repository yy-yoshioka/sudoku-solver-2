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
