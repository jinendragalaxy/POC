// Define a function named 'greet' that takes one parameter 'name' with a default value of "Guest"
function greet(name = "Guest") {
    // Log a greeting message using template literals
    console.log(`Hello, ${name}`);
  }
  
  // Call the 'greet' function without passing any argument
  // Since no name is provided, it uses the default value "Guest"
  greet(); // Output: Hello, Guest
  
  // Call the 'greet' function with the argument "Jinendra"
  // The default value is overridden by the provided name
  greet("Jinendra"); // Output: Hello, Jinendra
  