function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited for ${ms} milliseconds`);
        }, ms);
    });
}
async function runAsyncTasks() {
    console.log("Task 1 started");
    const result1 = await delay(1000); // waits 1 second
    console.log(result1); // "Waited for 1000 milliseconds"
    const result2 = await delay(2000); // waits 2 seconds
    console.log(result2); // "Waited for 2000 milliseconds"
    console.log("Task 2 finished");
}
runAsyncTasks();
