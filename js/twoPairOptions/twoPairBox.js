const boxOptionsReduce = (cellArray, boxFilterArray) => {
  const boxNum = boxFilterArray[0].box;
  const boxCell1 = boxFilterArray[0].id;
  const boxCell2 = boxFilterArray[1].id;

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
