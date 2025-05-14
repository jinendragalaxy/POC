// sum.ts

export function setupAddition(): void {
    const num1Input = document.getElementById("num1") as HTMLInputElement;
    const num2Input = document.getElementById("num2") as HTMLInputElement;
    const resultSpan = document.getElementById("result") as HTMLSpanElement;
    const addButton = document.getElementById("addBtn") as HTMLButtonElement;
  
    addButton.addEventListener("click", () => {
      const a = Number(num1Input.value);
      const b = Number(num2Input.value);
      const sum = a + b;
  
      console.log("Sum:", sum);
      resultSpan.textContent = sum.toString();
    });
  }
  