const identicalRowReduce = (cellArr, box, row, number) => {
  const targetCell = cellArr.filter(
    (item) => item.box !== box && item.row === row && item.options.length !== 1
  );

  let reduceNum = +number;

  //   https://stackoverflow.com/questions/3954438/how-to-remove-item-from-array-by-value
  //   console.log(targetCell);

  const resultRowArr = targetCell.map((item) => {
    let targetOptions = item.options;
    let check = targetOptions.includes(reduceNum);
    if (check === true) {
      let index = targetOptions.indexOf(reduceNum);
      targetOptions.splice(index, 1);
    }
    return item;
  });

  return resultRowArr;
};

export { identicalRowReduce };
