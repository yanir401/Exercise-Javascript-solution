const countryToLiveIn = (language, isIsland, population, country) => {
  const condition =
    language.toLowerCase() === country.language.toLowerCase() &&
    isIsland === country.isIsland &&
    population > country.population;

  if (condition) console.log(`You should live in ${country.countryName}`);
  else console.log(`${country.countryName} does not meet your criteria`);
};

const israel = {
  countryName: "Israel",
  language: "hebrew",
  isIsland: false,
  population: 9,
};
countryToLiveIn("English", false, 50, israel);

const wales = {
  countryName: "Wales",
  language: "English",
  isIsland: false,
  population: 3,
};

countryToLiveIn("English", false, 50, wales);
