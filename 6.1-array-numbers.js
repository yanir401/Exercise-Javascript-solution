const arr = [1, 7, 3, 0, -5, 7, 3, 9];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

const arrayLength = (arr) => {
  let length = 0;
  for (let i = 0; arr[i] !== undefined; i++) {
    length++;
  }
  return length;
};

console.log(arrayLength(arr));

const arraySum = (arr) => {
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  return sum;
};

// console.log(arraySum(arr));

const arrayMulti = (arr) => {
  let multi = 1;
  for (const i of arr) {
    console.log(multi, i);
    multi *= i;
  }
  return multi + 0;
};

console.log(arrayMulti(arr));
