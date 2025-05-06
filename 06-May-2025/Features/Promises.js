
// A function that returns a Promise
function fetchData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error while fetching data.");
            }
        }, 2000); // simulate a delay
    });
}

// Call the function and handle the Promise
fetchData(true) // change to false to test reject
    .then(response => {
        console.log("Success:", response);
    })
    .catch(error => {
        console.log("Failure:", error);
    });
