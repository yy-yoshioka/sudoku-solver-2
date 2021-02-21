const colOptionsReduce = (cellArray, colFilterArray) => {
  const colNum = +colFilterArray[0].col;
  const cell1 = colFilterArray[0].id;
  const cell2 = colFilterArray[1].id;

  const getColOptions = cellArray.filter(
    (item) =>
      item.col === colNum &&
      item.id !== cell1 &&
      item.id !== cell2 &&
      item.options.length !== 1
  );
  return getColOptions;
};

export { colOptionsReduce };
