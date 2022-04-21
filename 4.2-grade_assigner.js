const returnScore = (num) => {
  if (num >= 0 && num <= 64) return "F";
  else if (num >= 65 && num <= 69) return "D";
  else if (num >= 70 && num <= 79) return "C";
  else if (num >= 80 && num <= 89) return "B";
  else if (num >= 90 && num <= 100) return "A";
  else return "Not in rage";
};

console.log(returnScore(-2));
console.log(returnScore(0));
console.log(returnScore(4));
console.log(returnScore(65));
console.log(returnScore(66));
console.log(returnScore(69));
console.log(returnScore(75));
console.log(returnScore(79));
console.log(returnScore(80));
console.log(returnScore(85));
console.log(returnScore(89));
console.log(returnScore(90));
console.log(returnScore(99));
console.log(returnScore(100));
console.log(returnScore(101));
