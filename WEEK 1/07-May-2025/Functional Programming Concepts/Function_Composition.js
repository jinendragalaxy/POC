const double = x => x * 2;

const square = x => x * x;

// Compose the two functions: first double the number, then square the result
//combining small functions to build more complex logic
const doubleThenSquare = x => square(double(x));

// Call the composed function with input 3

console.log(doubleThenSquare(3)); 
