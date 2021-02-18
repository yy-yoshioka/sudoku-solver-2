import { concatArrays } from '../settings/arrays.js';

const reduceOptionsBox = (cellArray, boxArray) => {
  let reducedObj = {};
  let reducedArr = [];

  cellArray.forEach((item1) => {
    let id1 = item1.id;
    let box1 = item1.box;
    let options1 = item1.options;
    let cell1 = item1.cell;
    let row1 = item1.row;
    let col1 = item1.col;
    boxArray.forEach((item2) => {
      let box2 = item2.box;
      let options2 = item2.arr;

      if (options1.length !== 1) {
        if (box1 === box2) {
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
  //   console.log(cellArray);
  //   console.log(reducedArr);
  //   const reduceBoxArr = concatArrays(cellArray, reducedArr);
  //   console.log(reduceBoxArr);
  const reduceBoxRes = concatArrays(cellArray, reducedArr);

  return reduceBoxRes;
};

export { reduceOptionsBox };
