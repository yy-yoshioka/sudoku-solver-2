const reducerOptions = (map, val) => {
  if ((map[val] == null) & (val.length === 2)) {
    map[val] = 1;
  } else if (map[val] !== undefined) {
    ++map[val];
  }
  return map;
};

// https://stackoverflow.com/questions/25421233/javascript-removing-undefined-fields-from-an-object
const objectFilter = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === 1) {
      delete obj[key];
    }
  });
  return obj;
};

const reducerRowCol = (map, val) => {
  if (map[val] == null) {
    map[val] = 1;
  } else if (map[val] !== undefined) {
    ++map[val];
  }
  return map;
};

const differenceArr = (resBoxRowColOptions, reduceArr) => {
  // console.log(resBoxRowColOptions);
  const newCell = resBoxRowColOptions.reduce((newArr, item) => {
    let optionsArr = item.options;
    let difference = optionsArr.filter((x) => !reduceArr.includes(x));
    let obj = {};
    obj = {
      id: item.id,
      box: item.box,
      cell: item.cell,
      row: item.row,
      col: item.col,
      options: difference,
      value: item.value,
    };
    newArr.push(obj);
    return newArr;
  }, []);
  return newCell;
};

// https://stackoverflow.com/questions/1078118/how-do-i-iterate-over-a-json-structure
const getKey = (arr) => {
  let keyNum = '';
  for (let key in arr) {
    keyNum = +key;
  }
  return keyNum;
};

export { reducerOptions, objectFilter, reducerRowCol, differenceArr, getKey };
