import { differenceArr } from './twoPairArray.js';

const colController = (cellArr, cell1, cell2, col, reduceArr) => {
  const getCells = cellArr.filter(
    (item) =>
      item.col === col &&
      item.id !== cell1 &&
      item.id !== cell2 &&
      item.options.length !== 1
  );

  const resCol = differenceArr(getCells, reduceArr);
  return resCol;
};

export { colController };
