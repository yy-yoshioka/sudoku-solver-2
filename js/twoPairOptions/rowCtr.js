import { differenceArr } from './twoPairArray.js';

const rowController = (cellArr, cell1, cell2, row, reduceArr) => {
  const getCells = cellArr.filter(
    (item) =>
      item.row === row &&
      item.id !== cell1 &&
      item.id !== cell2 &&
      item.options.length !== 1
  );

  const resRow = differenceArr(getCells, reduceArr);
  return resRow;
};

export { rowController };
