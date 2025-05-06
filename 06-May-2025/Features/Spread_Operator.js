// Define an array 'names' with three string elements
const names = ["Mike", "John", "Sara"];

// Define a function 'getnames' that takes three parameters and logs them
const getnames = (name1, name2, name3) => {
    console.log(name1, name2, name3);
}

// Call 'getnames' using the spread operator to unpack the array into individual arguments
getnames(...names);

// Call 'getnames' without the spread operator — only the first parameter is passed, rest are undefined
getnames(names[0]);