// Define an arrow function 'add' with parameters a, b, c, and 'others' using the rest operator
const add = (a, b, c, ...others) => {
    // Log the additional arguments passed beyond the first three (collected in 'others')
    console.log(others);

    return console.log(`Sum ${a} & ${b} & ${c} : ${a + b + c}`); 
}


add(1, 2, 3, 4, 5, 6, 7, 8, 9);

