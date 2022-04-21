let people = ["Greg", "Mary", "Devon", "James"];

// 1
for (const iterator of people) {
  console.log(iterator);
}

//2
people.splice(people.indexOf("Greg"), 1);
console.log(people);

//3
people.splice(people.indexOf("James"), 1);
console.log(people);

//4
people.unshift("Matt");
console.log(people);

//5
people.push("Yanir");
console.log(people);

//6

for (const iterator of people) {
  console.log(iterator);
  if (iterator === "Mary") break;
}

//7
const newPeople = people.slice(2);
console.log(newPeople);

//8
console.log(people.indexOf("Mary"));

//9
console.log(people.indexOf("Foo"));

//10
people = ["Greg", "Mary", "Devon", "James"];
people.splice(people.indexOf("Devon"), 1, "Elizabeth", "Artie");
console.log(people);

//11
let withBob = people.join("Bob ");
console.log(withBob);
