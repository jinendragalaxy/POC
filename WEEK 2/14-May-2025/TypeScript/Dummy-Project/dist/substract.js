export function setupSubstraction() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultSpan = document.getElementById("result");
    const subButton = document.getElementById("subBtn");
    if (!num1Input || !num2Input || !resultSpan || !subButton) {
        console.error("One or more elements not found in DOM.");
        return;
    }
    subButton.addEventListener("click", () => {
        const a = Number(num1Input.value);
        const b = Number(num2Input.value);
        const minus = a - b;
        console.log("Subtraction:", minus);
        resultSpan.textContent = minus.toString();
    });
}
