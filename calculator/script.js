let input = document.getElementById("input");
let buttons = document.getElementsByClassName("btn");
let currentExpression = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    // Append input
    if (value !== "=" && value !== "C") {
      currentExpression += value;
      input.value = currentExpression;
    }

    // Evaluate expression
    if (value === "=") {
      try {
        currentExpression = evaluateExpression(currentExpression);
        input.value = currentExpression;
      } catch (e) {
        input.value = "Error";
        currentExpression = "";
      }
    }

    // Clear input
    if (value === "C") {
      currentExpression = "";
      input.value = "";
    }
  });
});

function evaluateExpression(expr) {
  // Convert % to division
  expr = expr.replace(/%/g, "/100");
  return eval(expr);
}
