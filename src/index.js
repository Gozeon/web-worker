const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const sum = document.querySelector('#sum');

const SimpleWorker = require('worker-loader!./simpleWorker.js');
/* eslint-disable new-parens */
const simpleWorker = new SimpleWorker;
/* eslint-disable */

num1.onchange = function () {
  simpleWorker.postMessage([num1.value, num2.value]);
};

num2.onchange = function () {
  simpleWorker.postMessage([num1.value, num2.value]);
};

simpleWorker.onmessage = function (e) {
  sum.textContent = e.data;
};
