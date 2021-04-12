import { concatArrays } from '../settings/arrays.js';

const reAssignNumMain = (mainArray, tempArr) => {
  let arr = [];
  let newTempArr = [];

  const data = JSON.parse(localStorage.getItem('data'));
  const temCellNum = JSON.parse(localStorage.getItem('temCellNum'));
  const getLastArr = temCellNum.length - 1;

  console.log(tempArr);
  console.log(temCellNum);

  const getCell = temCellNum[getLastArr];

  const getData = data[getLastArr];
  const makeData = getData.map((el) => {
    const id = el.id;
    const newMainArr = mainArray.filter((item) => item.id === `${id}`);

    el.cell = newMainArr[0].cell;
    if (el.options.length !== 1 && el.cell.lastChild.innerHTML !== '') {
      el.cell.lastChild.innerHTML = '';
    }
    return el;
  });

  if (getCell.cell.options.length === 2) {
    const getId = getCell.cell.id;
    const updateOption = makeData.filter((item) => item.id === `${getId}`);
    const newCell = updateOption.map((el) => {
      const getNextNum = el.options[1];
      el.options = [+getNextNum];
      return el;
    });

    arr = concatArrays(makeData, newCell);

    const newTempCells = temCellNum.filter((item) => item !== getCell);
    const newData = data.filter((item) => item !== getData);
    console.log(newData);
    console.log(newTempCells);

    localStorage.setItem('data', JSON.stringify(newData));
    localStorage.setItem('temCellNum', JSON.stringify(newTempCells));

    const data1 = JSON.parse(localStorage.getItem('data'));
    const temCellNum1 = JSON.parse(localStorage.getItem('temCellNum'));

    console.log(data1);
    console.log(temCellNum1);
  }

  return [arr, newTempArr];
};

export { reAssignNumMain };
