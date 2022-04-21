const colorsFunc = (color) => {
  let returnVar;

  switch (color) {
    case "yellow":
    case "pink":
    case "orange":
      returnVar = "Light color";
      break;

    case "blue":
    case "purple":
    case "brown":
      returnVar = "dark color";
      break;

    default:
      returnVar = "Unknown color";
      break;
  }

  return returnVar;
};

console.log(colorsFunc("brown"));
