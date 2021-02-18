import { concatArrays } from '../settings/arrays.js';

const reduceOptionsCol = (cellArray, colArray) => {
  let reducedObj = {};
  let reducedArr = [];

  cellArray.forEach((item1) => {
    let id1 = item1.id;
    let box1 = item1.box;
    let options1 = item1.options;
    let cell1 = item1.cell;
    let row1 = item1.row;
    let col1 = item1.col;
    colArray.forEach((item2) => {
      let col2 = item2.col;
      let options2 = item2.arr;

      if (options1.length !== 1) {
        if (col1 === col2) {
          const reduceOptions = options1.filter((x) => !options2.includes(x));
          reducedObj = {};
          reducedObj = {
            id: id1,
            box: box1,
            cell: cell1,
            row: row1,
            col: col1,
            value: '',
            options: reduceOptions,
          };
          reducedArr.push(reducedObj);
        }
      }
    });
  });

  const reduceColRes = concatArrays(cellArray, reducedArr);

  return reduceColRes;
};

export { reduceOptionsCol };
