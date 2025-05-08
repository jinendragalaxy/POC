// This demonstrates a First-Class Function: 'greet' can be stored in a variable, passed, or returned
function greet(name) {
    return `Hello, ${name}`;
  }
  
  // A Higher-Order Function: 'processUser' takes another function (fn) as a parameter
  // It calls the passed function 'fn' with the given 'name'
  function processUser(name, fn) {
    return fn(name);
  }
  
  // 'greet' is passed as a callback and called inside 'processUser'
  console.log(processUser("Jinendra", greet));
  