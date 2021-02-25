const colOptionsReduce = (cellArray, colFilterArray, cell1, cell2) => {
  const colNum = +colFilterArray[0].col;
  const colCell1 = cell1;
  const colCell2 = cell2;

  const getColOptions = cellArray.filter(
    (item) =>
      item.col === colNum &&
      item.id !== colCell1 &&
      item.id !== colCell2 &&
      item.options.length !== 1
  );
  console.log(getColOptions);
  return getColOptions;
};

export { colOptionsReduce };
