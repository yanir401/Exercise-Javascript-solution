const isString = (str, fallBackFunc) => {
  if (typeof str === "string") fallBackFunc(str);
};

const createDashes = (str) => {
  // str = str.replaceAll(" ", "-"); //1 Method
  let i = 0;
  while (str[i] !== undefined) {
    str = str.replace(" ", "-");
    i++;
  }

  return str;
};

const firstWordUpperCase = (str, fallBackFunc) => {
  let replacedWord = str.split(" ");
  let firstWordToReplace = replacedWord;
  firstWordToReplace = firstWordToReplace[0].toUpperCase();
  str = str.replace(replacedWord[0], firstWordToReplace);

  return fallBackFunc(str);
};

const logToConsole = (parm) => console.log(parm);

isString("abcd", logToConsole);

const res = firstWordUpperCase("hello i am yanir", createDashes);
console.log(res);

firstWordUpperCase("hello i am yanir", logToConsole);

const calSum = (arr) => {
  let sum = 0;
  for (const iterator of arr) {
    sum += iterator;
  }
  return sum;
};
const myFunc = (arr, fallBackFunc) => {
  let i = 0;
  while (i < arr.length) {
    arr[i] *= 2;
    i++;
  }
  return fallBackFunc(arr);
};

console.log(myFunc([2, 4, 6, 8], calSum));
