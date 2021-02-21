import { identicalReducerOptions } from './identicalDirectionArray.js';

const identicalRowCol = (cellArr) => {
  const boxAll = cellArr;
  const box1 = boxAll.filter((item) => item.box === 1);

  const filteredBox1 = box1
    .map((item) => item.options)
    .reduce(identicalReducerOptions, {});

  const newArr = box1.reduce((acc, curr) => {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});

  console.log(newArr);
};

export { identicalRowCol };
