import { concatArrays } from '../settings/arrays.js';

const xWingRowReduce = (cellArr, arr) => {
  const resultRowArr = arr.map((obj) => {
    Object.keys(obj).forEach((key) => (obj[key] !== 2 ? delete obj[key] : {}));
    return obj;
  });

  let newArr = [];
  resultRowArr.forEach((obj, index) => {
    Object.keys(obj).forEach((key) => {
      const findCells = cellArr.filter(
        (item) => item.row === index + 1 && item.options.includes(+key)
      );
      //   console.log(findCells);
      let newObj = {};
      newObj = {
        row: index + 1,
        number: +key,
        cell1Col: findCells[0].col,
        cell1Box: findCells[0].box,
        cell2Col: findCells[1].col,
        cell2Box: findCells[1].box,
      };
      newArr = newArr.concat(newObj);
    });
  });

  for (let i = 1; i < 10; i++) {
    const getNumArr = newArr.filter((item) => item.number === i);
    if (getNumArr.length !== 0 && getNumArr.length !== 1) {
      // combination
      for (let j = 0; j < getNumArr.length - 1; j++) {
        for (let k = j + 1; k < getNumArr.length; k++) {
          let rowNumArr = [];
          rowNumArr.push(getNumArr[j]);
          rowNumArr.push(getNumArr[k]);

          const box1 = rowNumArr[0].cell1Box;
          const box2 = rowNumArr[0].cell2Box;
          const box3 = rowNumArr[1].cell1Box;
          const box4 = rowNumArr[1].cell2Box;

          const col1 = rowNumArr[0].cell1Col;
          const col2 = rowNumArr[0].cell2Col;
          const col3 = rowNumArr[1].cell1Col;
          const col4 = rowNumArr[1].cell2Col;

          const row1 = rowNumArr[0].row;
          const row2 = rowNumArr[1].row;
          const targetNum = rowNumArr[0].number;
          let arr = [];

          if ((box1 === box2 && box2 === box3 && box3 === box4) === false) {
            if (col1 === col3 && col2 === col4) {
              arr = [];
              const getCol1 = cellArr.filter(
                (item) =>
                  item.col === col1 &&
                  item.row !== row1 &&
                  item.row !== row2 &&
                  item.options.length !== 1
              );
              const newGetCol1 = getCol1.map((el) => {
                if (el.options.includes(targetNum)) {
                  let index = el.options.indexOf(targetNum);
                  el.options.splice(index, 1);
                }
                return el;
              });

              arr = arr.concat(newGetCol1);

              const getCol2 = cellArr.filter(
                (item) =>
                  item.col === col2 &&
                  item.row !== row1 &&
                  item.row !== row2 &&
                  item.options.length !== 1
              );
              const newGetCol2 = getCol2.map((el) => {
                if (el.options.includes(targetNum)) {
                  let index = el.options.indexOf(targetNum);
                  el.options.splice(index, 1);
                }
                return el;
              });

              arr = arr.concat(newGetCol2);
              cellArr = concatArrays(cellArr, arr);
            } else if (col1 === col4 && col2 === col3) {
              let arr = [];
              const getCol3 = cellArr.filter(
                (item) =>
                  item.col === col1 &&
                  item.row !== row1 &&
                  item.row !== row2 &&
                  item.options.length !== 1
              );

              const newGetCol3 = getCol3.map((el) => {
                if (el.options.includes(targetNum)) {
                  let index = el.options.indexOf(targetNum);
                  el.options.splice(index, 1);
                }
                return el;
              });
              arr = arr.concat(newGetCol3);

              const getCol4 = cellArr.filter(
                (item) =>
                  item.col === col2 &&
                  item.row !== row1 &&
                  item.row !== row2 &&
                  item.options.length !== 1
              );

              const newGetCol4 = getCol4.map((el) => {
                if (el.options.includes(targetNum)) {
                  let index = el.options.indexOf(targetNum);
                  el.options.splice(index, 1);
                }
                return el;
              });
              arr = arr.concat(newGetCol4);
              cellArr = concatArrays(cellArr, arr);
            }
          }
        }
      }
    }
  }
  return cellArr;
};

export { xWingRowReduce };
