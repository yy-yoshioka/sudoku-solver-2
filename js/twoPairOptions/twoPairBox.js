const boxOptionsReduce = (cellArray, boxFilterArray, cell1, cell2) => {
  const boxNum = boxFilterArray[0].box;
  const boxCell1 = cell1;
  const boxCell2 = cell2;

  const getBoxOptions = cellArray.filter(
    (item) =>
      item.box === boxNum &&
      item.id !== boxCell1 &&
      item.id !== boxCell2 &&
      item.options.length !== 1
  );
  return getBoxOptions;
};

export { boxOptionsReduce };
