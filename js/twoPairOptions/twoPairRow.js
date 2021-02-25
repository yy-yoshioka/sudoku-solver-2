const rowOptionsReduce = (cellArray, rowFilterArray, cell1, cell2) => {
  const rowNum = +rowFilterArray[0].row;
  const rowCell1 = cell1;
  const rowCell2 = cell2;

  const getRowOptions = cellArray.filter(
    (item) =>
      item.row === rowNum &&
      item.id !== cell1 &&
      item.id !== cell2 &&
      item.options.length !== 1
  );

  return getRowOptions;
};

export { rowOptionsReduce };
