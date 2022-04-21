const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetter = {};
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    const letter = array[i][j].toLowerCase();
    if (letter >= "a" && letter <= "z") {
      if (!countLetter[letter]) countLetter[letter] = 0;
      countLetter[letter] += 1;
    }

    // console.log(
    //   "word length",
    //   array[j].length,
    //   "j",
    //   j,
    //   "i",
    //   i,s
    //   "word",
    //   array[j],
    //   array[i]
    // );
  }
  console.log(
    "🚀 ~ file: 8.4-count_the_letters.js ~ line 10 ~ countLetter[array[i][j]]",
    countLetter
  );
}

const maxLetter = (obj) => {
  let max = { counter: 0 };
  for (const key in obj) {
    //   max = { key, counter: countLetter[key] };
    max.counter < obj[key] ? ((max.key = key), (max.counter = obj[key])) : "s";
  }
  return `The letter ${max.key}  appeared  ${max.counter} times`;
};
console.log(maxLetter(countLetter));

const obj1 = {
  name: "yanir",
  age: 28,
  childrens: true,
};

const check = Object.entries(obj1);
console.log("🚀 ~ file: 8.4-count_the_letters.js ~ line 47 ~ check", check);

for (const key in obj1) {
  console.log(key);
}
