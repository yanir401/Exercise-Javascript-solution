const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (const outIterator of listOfNeighbors) {
  for (const inIterator of outIterator) {
    console.log(inIterator);
  }
}

// for (let i = 0; i < listOfNeighbors.length; i++) {
//   let row = listOfNeighbors[i];
//   for (let j = 0; j < row.length; j++) {
//     console.log(listOfNeighbors[i][j]);
//   }
// }

// for (let i = 0; i < listOfNeighbors.length; i++) {
//   for (let j = 0; j < listOfNeighbors[i].length; j++) {
//     console.log(listOfNeighbors[i][j]);
//   }
// }
