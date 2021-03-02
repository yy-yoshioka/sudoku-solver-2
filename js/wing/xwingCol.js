import { concatArrays } from '../settings/arrays.js';

const xWingColReduce = (cellArr, arr) => {
  const resultColArr = arr.map((obj) => {
    Object.keys(obj).forEach((key) => (obj[key] !== 2 ? delete obj[key] : {}));
    return obj;
  });

  let newArr = [];
  resultColArr.forEach((obj, index) => {
    Object.keys(obj).forEach((key) => {
      const findCells = cellArr.filter(
        (item) => item.col === index + 1 && item.options.includes(+key)
      );
      //   console.log(findCells);
      let newObj = {};
      newObj = {
        col: index + 1,
        number: +key,
        cell1Row: findCells[0].row,
        cell1Box: findCells[0].box,
        cell2Row: findCells[1].row,
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
          let colNumArr = [];
          colNumArr.push(getNumArr[j]);
          colNumArr.push(getNumArr[k]);

          const box1 = colNumArr[0].cell1Box;
          const box2 = colNumArr[0].cell2Box;
          const box3 = colNumArr[1].cell1Box;
          const box4 = colNumArr[1].cell2Box;

          const row1 = colNumArr[0].cell1Row;
          const row2 = colNumArr[0].cell2Row;
          const row3 = colNumArr[1].cell1Row;
          const row4 = colNumArr[1].cell2Row;

          const col1 = colNumArr[0].col;
          const col2 = colNumArr[1].col;
          const targetNum = colNumArr[0].number;
          let arr = [];

          if ((box1 === box2 && box2 === box3 && box3 === box4) === false) {
            if (row1 === row3 && row2 === row4) {
              arr = [];
              const getRow1 = cellArr.filter(
                (item) =>
                  item.row === row1 &&
                  item.col !== col1 &&
                  item.col !== col2 &&
                  item.options.length !== 1
              );

              const newGetRow1 = getRow1.map((el) => {
                if (el.options.includes(targetNum)) {
                  let index = el.options.indexOf(targetNum);
                  el.options.splice(index, 1);
                }
                return el;
              });

              arr = arr.concat(newGetRow1);
              const getRow2 = cellArr.filter(
                (item) =>
                  item.row === row2 &&
                  item.col !== col1 &&
                  item.col !== col2 &&
                  item.options.length !== 1
              );

              const newGetRow2 = getRow2.map((el) => {
                if (el.options.includes(targetNum)) {
                  let index = el.options.indexOf(targetNum);
                  el.options.splice(index, 1);
                }
                return el;
              });
              arr = arr.concat(newGetRow2);
              cellArr = concatArrays(cellArr, arr);
            } else if (row1 === row4 && row2 === row3) {
              let arr = [];
              const getRow3 = cellArr.filter(
                (item) =>
                  item.row === row1 &&
                  item.col !== col1 &&
                  item.col !== col2 &&
                  item.options.length !== 1
              );

              const newGetRow3 = getRow3.map((el) => {
                if (el.options.includes(targetNum)) {
                  let index = el.options.indexOf(targetNum);
                  el.options.splice(index, 1);
                }
                return el;
              });
              arr = arr.concat(newGetRow3);

              const getRow4 = cellArr.filter(
                (item) =>
                  item.row === row2 &&
                  item.col !== col1 &&
                  item.col !== col2 &&
                  item.options.length !== 1
              );

              const newGetRow4 = getRow4.map((el) => {
                if (el.options.includes(targetNum)) {
                  let index = el.options.indexOf(targetNum);
                  el.options.splice(index, 1);
                }
                return el;
              });
              arr = arr.concat(newGetRow4);
              cellArr = concatArrays(cellArr, arr);
            }
          }
        }
      }
    }
  }

  return cellArr;
};

export { xWingColReduce };
