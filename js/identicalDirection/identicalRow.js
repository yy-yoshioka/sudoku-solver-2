const identicalRowReduce = (cellArr, box, row, number) => {
  const targetCells = cellArr.filter(
    (item) => item.box !== box && item.row === row && item.options.length !== 1
  );

  let reduceRowNum = +number;

  //   https://stackoverflow.com/questions/3954438/how-to-remove-item-from-array-by-value
  //   console.log(targetCell);

  const resultRowArr = targetCells.map((item) => {
    let targetRowOptions = item.options;
    let check = targetRowOptions.includes(reduceRowNum);
    if (check === true) {
      let index = targetRowOptions.indexOf(reduceRowNum);
      targetRowOptions.splice(index, 1);
    }
    return item;
  });

  return resultRowArr;
};

export { identicalRowReduce };
