const ifElseFunc = (password) => {
  if (password.trim().length > 7) return "Strong";
  else return "Weak";
};
const ternaryFunc = (password) => {
  return password.trim().length > 7 ? "Strong" : "Weak";
};

const logicalOpFunc = (password) => {
  return password.trim().length > 7;
};

const advancedPassVal = (password) => {
  const trimPassword = password.trim();

  return trimPassword.length < 7
    ? "Weak"
    : trimPassword.toLowerCase() != trimPassword // trimPassword.toLowerCase =acdfefghi | trimPassword=acdfeFghi
    ? "Strong"
    : "Weak";
};

console.log(ifElseFunc("abc"));
console.log(ternaryFunc("ssssc"));
console.log(logicalOpFunc("ssssc"));
console.log(advancedPassVal("acdfeFghi"));
