const numbers = [2, 54, 76, 123, 67, 235, 99, 21, 10, 16];

const maxVal = (array) => {
  let max;
  max = array.reduce((prevVal, currentVal) => {
    if (currentVal > prevVal) return currentVal;
    return prevVal;
  });

  return max;
};

console.log("Max:", maxVal(numbers));

const sumOfEvenNum = (array) => {
  const sum = array.reduce((prevVal, currentVal) => {
    if (currentVal % 2 === 0) return prevVal + currentVal;
    return prevVal;
  });

  return sum;
};

console.log("sumOfEvenNum:", sumOfEvenNum(numbers));

const averageNum = (array) => {
  const sum = array.reduce((prevVal, currentVal) => {
    return prevVal + currentVal;
  });

  return sum / array.length;
};

console.log("The Average:", averageNum(numbers));
