//1
const arrayOfObj = new Array(100).fill({ personName: "Yanir", age: 28 });

//2
let arrayOfNum = new Array(100).fill(0);
arrayOfNum = Array.from(arrayOfNum, (_, i) => i + 1);
console.log("arrayOfNum", arrayOfNum);

//3  need to fix <-----------------------

const convertValueFromObjToArr = Object.values({ key1: "1", key2: "2" });
console.log("convertValueFromObjToArr", convertValueFromObjToArr);

//4
arrayOfNum = [1, 2, 3, 4, 5];
arrayOfNum = Object.assign({}, arrayOfNum);
console.log("arrayOfNum1", arrayOfNum);

//5

console.log(Array.isArray(arrayOfNum)); // false
console.log(Array.isArray(arrayOfObj)); // true

//6

const arr = [1, 2, 3, 4, 5];
const copyWontAffect1 = arr.slice(); // old Method
const copyWontAffect2 = [...arr]; // ES6 Method
copyWontAffect1[0] = 5;
copyWontAffect2[0] = 6;
console.log(arr, copyWontAffect1, copyWontAffect2);

const copyWilleffect = arr;
copyWilleffect[0] = 20;
console.log(arr);
console.log(copyWilleffect);
