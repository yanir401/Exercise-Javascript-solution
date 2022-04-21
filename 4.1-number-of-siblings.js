let numSiblings;
numSiblings = window.prompt("How many siblings do you have?");
numSiblings = parseInt(numSiblings);
if (numSiblings === 1) console.log("1 sibling!");
else if (numSiblings > 1) console.log("More than 1 sibling");
else console.log("No siblings");

// We should you === since we can make sure that we compare and check the value but also the type of the variable
