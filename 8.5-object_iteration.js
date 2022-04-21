const swap = (obj) => {
  const newObj = {};

  for (const [key, value] of Object.entries(obj)) {
    newObj[value] = key;
  }
};

const obj = {
  fName: "Yanir",
  lastN: "Itzhak",
};
swap(obj);
