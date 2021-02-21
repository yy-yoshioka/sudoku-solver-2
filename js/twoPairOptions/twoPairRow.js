const rowOptionsReduce = (cellArray, rowFilterArray) => {
  const rowNum = +rowFilterArray[0].row;
  const cell1 = rowFilterArray[0].id;
  const cell2 = rowFilterArray[1].id;

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
