import { boxController } from './boxCtr.js';
import { rowController } from './rowCtr.js';
import { colController } from './colCtr.js';
import { concatArrays } from '../settings/arrays.js';

const boxRowColCtr = (cellArr, options, key) => {
  const resCellId1 = options[0].id;
  const resCellId2 = options[1].id;
  const resCellBox1 = +options[0].box;
  const resCellBox2 = +options[1].box;
  const resCellRow1 = +options[0].row;
  const resCellRow2 = +options[1].row;
  const resCellCol1 = +options[0].col;
  const resCellCol2 = +options[1].col;
  const number1 = +key[0];
  const number2 = +key[2];
  const reducedArr = [];
  reducedArr.push(number1, number2);
  const oldCellArr = cellArr;

  // same Box && same Row

  if (resCellBox1 === resCellBox2 && resCellRow1 === resCellRow2) {
    const boxRes = boxController(
      cellArr,
      resCellId1,
      resCellId2,
      resCellBox1,
      reducedArr
    );

    if (boxRes.length !== 0) {
      cellArr = concatArrays(cellArr, boxRes);
    }

    const rowRes = rowController(
      cellArr,
      resCellId1,
      resCellId2,
      resCellRow1,
      reducedArr
    );

    if (rowRes.length !== 0) {
      cellArr = concatArrays(cellArr, rowRes);
    }

    return cellArr;

    // same Box && same Col
  } else if (resCellBox1 === resCellBox2 && resCellCol1 === resCellCol2) {
    const boxRes = boxController(
      cellArr,
      resCellId1,
      resCellId2,
      resCellBox1,
      reducedArr
    );

    if (boxRes.length !== 0) {
      cellArr = concatArrays(cellArr, boxRes);
    }

    const colRes = colController(
      cellArr,
      resCellId1,
      resCellId2,
      resCellCol1,
      reducedArr
    );

    if (colRes.length !== 0) {
      cellArr = concatArrays(cellArr, colRes);
    }
    return cellArr;

    // same row
  } else if (resCellRow1 === resCellRow2) {
    const rowResult = rowController(
      cellArr,
      resCellId1,
      resCellId2,
      resCellRow1,
      reducedArr
    );
    if (rowResult.length !== 0) {
      cellArr = concatArrays(cellArr, rowResult);
    }
    return cellArr;

    // same col
  } else if (resCellCol1 === resCellCol2) {
    const colResult = colController(
      cellArr,
      resCellId1,
      resCellId2,
      resCellCol1,
      reducedArr
    );

    if (colResult.length !== 0) {
      cellArr = concatArrays(cellArr, colResult);
    }

    return cellArr;
    // same box
  } else if (resCellBox1 === resCellBox2) {
    const boxRes = boxController(
      cellArr,
      resCellId1,
      resCellId2,
      resCellBox1,
      reducedArr
    );
    if (boxRes.length !== 0) {
      cellArr = concatArrays(cellArr, boxRes);
    }
    return cellArr;
  } else {
    return cellArr;
  }
};

export { boxRowColCtr };
