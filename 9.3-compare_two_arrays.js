const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const compareArray = (arr1, arr2) => {
  const equals = [];
  for (let outIterator of arr1) {
    for (const InIterator of arr2) {
      if (outIterator === InIterator) equals.push(outIterator);
    }
  }
  if (equals.length > 0) return equals;

  return false;
};

console.log(compareArray(food, food1));
