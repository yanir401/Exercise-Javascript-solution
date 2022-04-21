const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

const descend = foods.slice().sort().reverse();
console.log("descend", descend);

const ascend = foods.slice().sort();
console.log("ascend", ascend);

// abcdefghijklmnopqrstuvwxyz

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

const descendWithUpperC = foodsWithUpperCase
  .slice()
  .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  .reverse();
console.log("descendWithUpperC", descendWithUpperC);

const ascendWithUpperC = foodsWithUpperCase
  .slice()
  .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("ascendWithUpperC", ascendWithUpperC);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const wordsLength = words.slice().sort((a, b) => b.length - a.length);
console.log("wordsLength", wordsLength);
