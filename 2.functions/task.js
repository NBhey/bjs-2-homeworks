function getArrayParams(...arr) {
  let sum = 0;
  arr.map((el) => {
    sum += el;
  });
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
    avg: Number((sum / arr.length).toFixed(2)),
  };
}

function summElementsWorker(...arr) {
  return arr.reduce((acc, el) => {
    return acc + el;
  }, 0);
}

function differenceMaxMinWorker(...arr) {
  return arr.length === 0 ? 0 : Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  let odd = 0;
  arr.map((el) => {
    if (el % 2 === 0) odd = odd + el;
  });

  let even = 0;
  arr.map((el) => {
    if (el % 2 !== 0) even = even + el;
  });

  return arr.length === 0 ? 0 : odd - even;
}

function averageEvenElementsWorker(...arr) {
  let sum = 0;
  let count = 0;
  arr.map((el) => {
    if (el % 2 === 0) {
      sum = sum + el;
      count += 1;
    }
  });

  return arr.length === 0 ? 0 : sum / count;
}

function makeWork(arrOfArr, func) {
  let arr = [];
  arrOfArr.map((el) => {
    arr.push(func(...el));
  });
  return Math.max(...arr);
}
