const identicalReducerOptions = (map, val) => {
  if (map[val] == null && val.length !== 1) {
    map[val] = 1;
  } else if (map[val] !== undefined) {
    ++map[val];
  }
  return map;
};

export { identicalReducerOptions };
