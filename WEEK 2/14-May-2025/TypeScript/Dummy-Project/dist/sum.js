export function setupAddition() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultSpan = document.getElementById("result");
    const addButton = document.getElementById("addBtn");
    addButton.addEventListener("click", () => {
        const a = Number(num1Input.value);
        const b = Number(num2Input.value);
        const sum = a + b;
        console.log("Sum:", sum);
        console.log("Hi from Js");
        resultSpan.textContent = sum.toString();
    });
}
