const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

const namesFromArray = (arr) => {
  let newArr = [];
  newArr = arr.map((ele) => {
    return ele.name;
  });
  return newArr;
};

namesFromArray(data);

const bornBefore = (arr) => {
  let newArr = [];
  arr.forEach((ele) => {
    let year = parseInt(ele.birthday.split("-")[2]);
    if (year < 1990) newArr.push(ele);
  });
  return newArr;
};

const result = bornBefore(data);

const countFoods = (arr) => {
  let newArr = [];
  arr.forEach((ele) => {
    newArr.push(ele.favoriteFoods.meats, ele.favoriteFoods.fish);
  });

  newArr = [].concat(...newArr);
  const objFoodCounter = {};
  newArr.forEach((e) => {
    if (objFoodCounter[e] === undefined) objFoodCounter[e] = 1;
    else objFoodCounter[e] = objFoodCounter[e] + 1;
  });
};

countFoods(data);
