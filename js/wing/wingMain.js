import { xWingReduce } from './xWing.js';

const wingMain = (cellArr) => {
  const xWingArr = xWingReduce(cellArr);
  return xWingArr;
};
export { wingMain };
