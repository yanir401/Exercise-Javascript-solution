function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

let israel = describeCountry("Israel", 9, "Jerusalem");
let germany = describeCountry("Germany", 83, "Berlin");
let hungary = describeCountry("Hungary", 10, "Budapest");
console.log("Israel: ", israel);
console.log("Germany: ", germany);
console.log("Hungary: ", hungary);
