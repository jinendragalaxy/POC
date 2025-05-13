function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
function Division() {
    try {
        var result = divide(10, 0);
        console.log("Result : ", result);
    }
    catch (error) {
        console.log("Error caught : ", error.message);
    }
    finally {
        console.log("Process complete");
    }
}
Division();
