const errorCtrMain = (arr) => {
  const getUniqueOptions = arr.filter((item) => item.options.length === 1);
  let colCheckResult = [];
  let rowCheckResult = [];
  let boxCheckResult = [];

  for (let i = 1; i < 10; i++) {
    let boxCheckArr = [];
    const getBox = getUniqueOptions.filter((item) => item.box === i);
    // console.log(getBox);
    const checkBox = getBox.map((item) => {
      boxCheckArr = boxCheckArr.concat(item.options);
      const boxDupRes = checkDuplicates(boxCheckArr);
      boxCheckResult.push(boxDupRes);
    });
    // console.log(boxCheckResult);

    let rowCheckArr = [];
    const getRow = getUniqueOptions.filter((item) => item.row === i);
    const checkRow = getRow.map((item) => {
      rowCheckArr = rowCheckArr.concat(item.options);
      const rowDupRes = checkDuplicates(rowCheckArr);
      rowCheckResult.push(rowDupRes);
    });
    // console.log(rowCheckResult);

    let colCheckArr = [];

    const getCol = getUniqueOptions.filter((item) => item.col === i);
    const checkCol = getCol.map((item) => {
      colCheckArr = colCheckArr.concat(item.options);
      const colDupRes = checkDuplicates(colCheckArr);
      colCheckResult.push(colDupRes);
    });
  }
  const boxRes = checker(boxCheckResult);
  const rowRes = checker(rowCheckResult);
  const colRes = checker(colCheckResult);

  if (boxRes === false || rowRes === false || colRes === false) {
    return 'error';
  }
};

// https://dev.to/will_devs/javascript-how-to-check-if-an-array-has-duplicate-values-cha

const checkDuplicates = (array) => {
  return new Set(array).size !== array.length;
};

//https://stackoverflow.com/questions/53897673/check-if-all-values-in-array-are-true-then-return-a-true-boolean-statement-jav
const checker = (arr) => {
  let check = arr.every((v) => v === false);
  return check;
};

export { errorCtrMain };
