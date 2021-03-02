import {
  reducerOptions,
  objectFilter,
  reducerRowCol,
} from '../twoPairOptions/twoPairArray.js';

const tempMain = (arr) => {
  const boxAll = arr.map((item) => item.options).reduce(reducerOptions, {});
  const newBoxAll = objectFilter(boxAll);
  let newArr = [];

  console.log(newBoxAll);
  for (let key in newBoxAll) {
    let num1 = +key.split(',')[0];
    let num2 = +key.split(',')[1];

    const getOptions = arr.filter(
      (item) =>
        item.options.includes(num1) &&
        item.options.includes(num2) &&
        item.options.length === 2
    );

    newArr = getOptions;
  }
  console.log(newArr);

  console.log(newArr[0]);
};

export { tempMain };
