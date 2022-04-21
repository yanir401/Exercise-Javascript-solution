// const shape = (n) => {
//   console.log(`steps(${n})`);
//   for (let i = 0; i <= n; i++) {
//     let toLog = "'";

//     for (let j = 0; j < i; j++) {
//       toLog += "#";
//     }
//     // let space = " ".repeat(n - j); // 1 method without another loop like downstairs
//     // toLog += space;

//     for (let g = i; g < n; g++) {
//       toLog += " ";
//     }
//     toLog += "'";
//     if (toLog.includes("#")) console.log(toLog);
//   }
// };

// shape(4);

const shape = (n) => {
  console.log(`steps(${n})`);
  for (let i = 0; i <= n; i++) {
    let toLog = "'";
    for (let j = 0; j < i; j++) {
      toLog += "#";
    }
    for (let g = i; g < n; g++) {
      toLog += " ";
    }
    toLog += "'";
    if (toLog.includes("#")) console.log(toLog);
  }
};

shape(4);
