const fillNumbers = (arr) => {
  const newArr = arr.map((item) => {
    if (item.options.length === 1 && item.cell.lastChild.innerHTML === '') {
      const number = item.options[0];
      item.cell.lastChild.innerHTML = item.options[0];
      // console.log(item.box);
      // reduce number from options in the same box
      const getBox = item.box;
      const sameBox = arr.filter((item) => item.box === getBox);
      // const filterBox = sameBox.map((fil) => {
      //   const arr = fil.options;
      //   const filtered = arr.filter((value) => {
      //     return value != number;
      //   });
      //   return filtered;
      // });
      // return filterBox;
    }
    return item;
  });

  // const optionArr = fillNumbersFromInnerHTML(newArr);
  fillNumbersFromInnerHTML(newArr);

  return newArr;
};

const fillNumbersFromInnerHTML = (arr) => {
  const optionEdit = arr.filter(
    (item) => item.cell.lastChild.innerHTML !== '' && item.options.length !== 1
  );

  const fillNumToArr = optionEdit.map((el) => {
    el.options = [+el.cell.lastChild.innerHTML];

    return el;
  });
  return fillNumToArr;
};

export { fillNumbers };
