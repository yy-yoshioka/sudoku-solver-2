import { difference, concatArrays } from '../settings/arrays.js';

const fillNumbers = (arr) => {
  let differenceArray = [];
  let filledNumberArray;

  const fillNum = arr.filter(
    (item) => item.options.length === 1 && item.cell.lastChild.innerHTML === ''
  );

  const fillNumber = fillNum.map((el) => {
    let cell = el.cell;
    let options = +el.options[0];
    cell.lastChild.innerHTML = options;
    return el;
  });

  filledNumberArray = concatArrays(arr, fillNumber);
  differenceArray = difference(filledNumberArray, fillNum);

  let differenceUnique = [];
  differenceUnique = differenceArray.filter(
    (item) => item.options.length === 1 && item.cell.lastChild.innerHTML === ''
  );

  if (differenceArray.length !== 0) {
    const filledNumRes = concatArrays(filledNumberArray, differenceArray);
    return filledNumRes;
  } else {
    const filledNumRes = filledNumberArray;
    return filledNumRes;
  }
};

export { fillNumbers };
