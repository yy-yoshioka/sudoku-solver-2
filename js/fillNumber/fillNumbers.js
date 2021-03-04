const fillNumbers = (arr) => {
  const newArr = arr.map((item) => {
    if (item.options.length === 1 && item.cell.lastChild.innerHTML === '') {
      item.cell.lastChild.innerHTML = item.options[0];
    }
    return item;
  });
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
