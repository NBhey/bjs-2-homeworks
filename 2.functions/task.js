function getArrayParams(...arr) {
  const sum = arr.reduce((acc, el) => {
    return (acc += el);
  }, 0);
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
    avg: Number((sum / arr.length).toFixed(2)),
  };
}

function summElementsWorker(...arr) {
  return arr.reduce((acc, el) => acc + el, 0);
}

function differenceMaxMinWorker(...arr) {
  return arr.length === 0 ? 0 : Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  let result = arr.reduce(
    (acc, el) => {
      if (el % 2 === 0) {
        acc.odd += el;
        return acc;
      } else {
        acc.even += el;
        return acc;
      }
    },
    { odd: 0, even: 0 }
  );
  return arr.length === 0 ? 0 : result.odd - result.even;
}

function averageEvenElementsWorker(...arr) {
  arr = arr.reduce(
    (acc, el) => {
      if (el % 2 === 0) {
        acc.sum = acc.sum + el;
        acc.length += 1;
      }
      return acc;
    },
    { sum: 0, length: 0 }
  );
  return arr.length === 0 ? 0 : arr.sum / arr.length;
}

function makeWork(arrOfArr, func) {
  arrOfArr = arrOfArr.map((el) => func(...el));
  return Math.max(...arrOfArr);
}
