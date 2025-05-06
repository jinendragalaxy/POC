// Define an async function to fetch users
async function Getusers() {
    try {
        // Await the response from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // Optional: check if the response is OK (status code 200–299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Await parsing the JSON body
        const data = await response.json();

        // Log the received data
        console.log(data);
    } catch (error) {
        // Log any error that occurs during the fetch or parsing
        console.log("Error:", error);
    }
}

// Call the function to test
Getusers();
