function percentageOfWorld1(population) {
  const worldPopulation = 7900;
  return ((population / worldPopulation) * 100).toFixed(2) + "%";
}

const populations = [14, 24, 90, 9];

const populationPercentages = (arr) => {
  const percentages = [];

  for (const iterator of arr) {
    percentages.push(percentageOfWorld1(iterator));
  }
  return percentages;
};

console.log(populationPercentages(populations));
