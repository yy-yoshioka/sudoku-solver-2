const reAssignNumMain = (storeMainArray, logHistory) => {
  const box51 = storeMainArray[0].filter((item) => item.box === 5);
  const box52 = storeMainArray[1].filter((item) => item.box === 5);
  //   console.log(box51);
  //   console.log(box52);
  //   console.log(logHistory);

  // const cellArray2 = concatArrays(mainArr, log);
  // log.cell.lastChild.innerHTML = '';
  // const filter = mainArr.filter(
  //   (item) =>
  //     item.options.length !== 1 && item.cell.lastChild.innerHTML !== ''
  // );
  // const filterArr = filter.map((el) => {
  //   const cellNum = (el.cell.lastChild.innerHTML = '');
  //   return el;
  // });
  // fillNumbers(cellArray2);
  // copyArr = cellArray2;

  //   check length
  //   console.log(logHistory.length);
  //   const getLast = +logHistory.length - 1;
  //   console.log(logHistory[getLast]);
};

export { reAssignNumMain };
