const numbers = [1, -5, 666, 2, 400, 11];

const descendNumbers = numbers.slice().sort((a, b) => b - a);
console.log(descendNumbers);

const ascendNumbers = numbers.slice().sort((a, b) => a - b);
console.log(ascendNumbers);
