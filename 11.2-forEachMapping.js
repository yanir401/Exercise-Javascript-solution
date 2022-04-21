const doubleValues = (array) => {
  const doubleValuesArray = array.map((num) => {
    return num * 2;
  });
  return doubleValuesArray;
};

const onlyEvenValues = (array) => {
  const onlyEvenValuesArray = array.filter((num) => {
    return num % 2 === 0;
  });
  return onlyEvenValuesArray;
};

console.log(onlyEvenValues([2, 4, 5, 10]));

const showFirstAndLast = (array) => {
  const newArray = [];
  let lastIndex = array.length - 1;
  array.forEach((element, i) => {
    if (typeof element === "string" && newArray.length === 0)
      newArray.push(element);
    else if (typeof array[lastIndex] === "string" && newArray.length === 1)
      newArray.push(array[lastIndex]);

    lastIndex--;
  });
  return newArray;
};

console.log(showFirstAndLast([2, "dsa", "abc", 10, "lol", "rofl", 21, 43]));

const vowelCount = (str) => {
  const objCounter = {};
  str.split("").forEach((char) => {
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z"))
      if (objCounter[char] === undefined) objCounter[char] = 1;
      else objCounter[char] = objCounter[char] + 1;
  });

  return objCounter;
};

console.log(vowelCount("hello i am yanir itzhak d2sa"));

const capitalizeStringFunc = (str) => {
  const newStr = str.split("").map((char) => {
    return char.toUpperCase();
  });
  return newStr.join("");
};

console.log(capitalizeStringFunc("Hi i am yanir"));

const shiftLetters = (str, sub) => {
  const newStr = str.split("").map((char) => {
    return String.fromCharCode(char.charCodeAt(0) - sub);
    // return char.toUpperCase();
  });
  return newStr.join("");
};

console.log(shiftLetters("hello man", 1));

const swapCase = (str) => {
  const splitString = str.split(" ");
  let newStringCap;
  newStringCap = splitString.map((ele) => {
    return (ele = ele.replace(ele[0], ele[0].toUpperCase()));
  });
  return newStringCap;
};

swapCase("Hi how you doing?");
