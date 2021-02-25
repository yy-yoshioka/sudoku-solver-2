import { differenceArr } from './twoPairArray.js';

const boxController = (cellArr, cell1, cell2, box, reduceArr) => {
  const getCells = cellArr.filter(
    (item) =>
      item.box === box &&
      item.id !== cell1 &&
      item.id !== cell2 &&
      item.options.length !== 1
  );
  const resBox = differenceArr(getCells, reduceArr);
  return resBox;
};

export { boxController };
