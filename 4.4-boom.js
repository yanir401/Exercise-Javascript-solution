const ifIncludeSeven = (num) => {
  if (num.includes(7)) console.log("BOOM-BOOM");
  else console.log("BOOM");
};

const ifBoom = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 7 === 0) ifIncludeSeven(i + " ");
    else console.log(i);
  }
};

ifBoom(89);
