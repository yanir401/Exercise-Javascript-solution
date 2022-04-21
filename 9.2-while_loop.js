const arr = ["boo", "doooo", "hoo", "ro"];

// 6.3

let arrCount = [];
for (const iterator of arr) {
  arrCount.push(iterator.length);
}
console.log("🚀 ~ file: 6.3-length_of_words.js ~ line 3 ~ arrCount", arrCount);

//----

let index = 0;
let arrCount2 = [];
while (index < arr.length) {
  arrCount2.push(arr[index].length);
  index++;
}
console.log("🚀 ~ file: 9.2-while_loop.js ~ line 14 ~ arrCount2", arrCount2);

// In this situation i prefer to use in the first method its more cleaner and simple
// We can use while loop when we dont know when we stop to running on the while loop
