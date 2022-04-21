//Block 1

var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// Result = 5  . b is outside otherfunction but otherfunction can use that variable since it is closures

//Block 2

var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a); // 1 - a is a var assignment to 1 in the global scope

//Block 3

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}

//Will print 3 3 3 - log will invoke only after 100ms in that time the for loop will finish to increment the index - i until 3
//and because i is in the global scope
