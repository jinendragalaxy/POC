// Define an outer function 'outer'
function outer() {
    
    let count = 0;

    // Return an inner function that increments and logs 'count'
    return function inner() {
        count++; // Access and modify the variable from the outer function
        console.log(count); // Print the updated count
    };
}

// Call 'outer' and store the returned inner function in 'counter'
const counter = outer();

// Each call to 'counter' executes the inner function and retains access to 'count' via closure
counter();
counter(); 

// function outer() {
    
//     let count = 0;
//     // return count++;
//     console.log(count++);
//     // Return an inner function that increments and logs 'count'
//     // return function inner() {
//     //     count++; // Access and modify the variable from the outer function
//     //     console.log(count); // Print the updated count
//     // };
// }
//  outer();
// outer();
// outer();