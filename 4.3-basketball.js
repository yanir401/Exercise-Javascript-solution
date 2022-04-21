const calcAvg = (teamDetails) => {
  let avgScore = 0;
  for (const score of teamDetails.scored) {
    avgScore += score;
  }
  teamDetails.scored = avgScore / 3;
  return teamDetails;
};

const whoWoN = (team1, team2) => {
  if (team1.scored > team2.scored) {
    return team1;
  } else if (team2.scored > team1.scored) {
    return team2;
  } else
    return {
      scored: team1.scored,
      teamName: `We had a draw between ${team1.teamName} ${team2.teamName}`,
    };
};

let team1 = calcAvg({ scored: [115, 120, 13], teamName: "John's team" });
let team2 = calcAvg({ scored: [115, 120, 13], teamName: "Mike's team" });

let winner1 = whoWoN(team1, team2);
console.log(
  `The Winner his ${winner1.teamName} with ${winner1.scored.toFixed(1)} points`
);

team1 = calcAvg({ scored: [165, 15, 24], teamName: "John's team" });
team2 = calcAvg({ scored: [89, 23, 13], teamName: "Mike's team" });
winner1 = whoWoN(team1, team2);

console.log(
  `The Winner his ${winner1.teamName} with ${winner1.scored.toFixed(1)} points`
);

let team3 = calcAvg({ scored: [115, 120, 13], teamName: "Mary's team" });

let winner2 = whoWoN(whoWoN(team1, team2), team3);
console.log(
  `The Winner his ${winner2.teamName} with ${winner2.scored.toFixed(1)} points`
);
team3 = calcAvg({ scored: [22, 12, 23], teamName: "Mary's team" });

winner2 = whoWoN(whoWoN(team1, team2), team3);
console.log(
  `The Winner his ${winner2.teamName} with ${winner2.scored.toFixed(1)} points`
);
