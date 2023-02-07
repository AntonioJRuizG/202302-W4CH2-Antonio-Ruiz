import { strictEquals} from './tools.js';

const arr = [
  [1, 1],
  [NaN, NaN],
  [0, -0],
  [-0, 0],
  [1, '1'],
  [true, false],
  [false, false],
  ['Water', 'oil'],
];

const computeResult = (array) => {
  array.forEach((element) => {
    const row = document.createElement('li');
    row.classList.add(`item`);
    document.querySelector('.list').append(row);
    row.innerHTML = `${element[0]}, ${element[0]} : ${strictEquals(
      element[0],
      element[1]
    )}`;
  });
};

window.onload = function () {
  computeResult(arr);
};



