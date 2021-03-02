import { cellArr } from '../settings/variables.js';
import { reducerOptions, objectFilter, reducerRowCol } from './twoPairArray.js';

import { fillNumbers } from '../fillNumber/fillNumbers.js';
import { boxRowColCtr } from './boxRowColController.js';

const twoPairMain = (result) => {
  let getRes = result;
  const boxAll = getRes.map((item) => item.options).reduce(reducerOptions, {});
  const newBoxAll = objectFilter(boxAll);

  for (let key in newBoxAll) {
    let num1 = +key.split(',')[0];
    let num2 = +key.split(',')[1];

    const getOptions = getRes.filter(
      (item) =>
        item.options.includes(num1) &&
        item.options.includes(num2) &&
        item.options.length === 2
    );

    for (let i = 0; i < getOptions.length - 1; i++) {
      for (let j = i + 1; j < getOptions.length; j++) {
        let resOption = [];
        resOption.push(getOptions[i]);
        resOption.push(getOptions[j]);

        const reducedResult = boxRowColCtr(getRes, resOption, key);

        getRes = reducedResult;
      }
    }
  }

  const res = fillNumbers(getRes);
  return res;
};

export { twoPairMain };
