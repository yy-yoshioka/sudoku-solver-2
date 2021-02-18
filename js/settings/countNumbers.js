const countNumber = (arr) => {
  let count = 0;
  arr.forEach((el) => {
    if (el.options.length === 1) {
      count = count + 1;
    }
  });

  return count;
};

export { countNumber };
