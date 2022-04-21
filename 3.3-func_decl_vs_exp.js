function percentageOfWorld1(population) {
  const worldPopulation = 7900;
  return ((population / worldPopulation) * 100).toFixed(1) + "%";
}

const percentageOfWorld2 = function (population) {
  const worldPopulation = 7900;
  return ((population / worldPopulation) * 100).toFixed(1) + "%";
};

const israelPop = percentageOfWorld1(9);
const italyPop = percentageOfWorld1(60);
const usaPop = percentageOfWorld1(330);
console.log("israelPop", israelPop);
console.log("italyPop", italyPop);
console.log("usaPop", usaPop);

const israelPop2 = percentageOfWorld2(9);
const italyPop2 = percentageOfWorld2(60);
const usaPop2 = percentageOfWorld2(330);
console.log("\nisraelPop", israelPop);
console.log("italyPop", italyPop);
console.log("usaPop", usaPop);
