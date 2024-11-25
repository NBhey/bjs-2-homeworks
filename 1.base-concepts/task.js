"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  const D = b ** 2 - 4 * a * c;
  if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr[0] = x1;
    arr[1] = x2;
  } else if (D == 0) {
    arr[0] = -b / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = (percent * 0.01) / 12;
  const bodyCredit = amount - contribution;
  const pay =
    bodyCredit * (percent + percent / ((1 + percent) ** countMonths - 1));
  return Number((pay * countMonths).toFixed(2));
}
