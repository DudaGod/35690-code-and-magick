'use strict';

function getMessage (a, b) {
  if (typeof a === 'boolean') {
    return a ? `Я попал в ${b}` : 'Я никуда не попал';
  } else if (typeof a === 'number') {
    return `Я прыгнул на ${a * 100} сантиметров`;
  } else if (Array.isArray(a) && Array.isArray(b)) {
    const mulArr = a.map((item, i) => item * b[i]);
    const length = mulArr.reduce((prevVal, currVal) => prevVal + currVal);
    return `Я прошёл ${length} метров`;
  } else if (Array.isArray(a)) {
    const sum = a.reduce((prevVal, currVal) => prevVal + currVal);
    return `Я прошёл ${sum} шагов`;
  }
}
