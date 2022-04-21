/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
function hello() {
  return "Welcome to Appleseeds Bootcamp!";
}

power = (a) => Math.pow(a, 2);

// From function expressions to IIFE functions.

(function squareRoot(a) {
  Math.sqrt(a);
})(2);

((a, b) => {
  Math.random() * (a - b) + b;
})(5, 2);
