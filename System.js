function appendValue(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  try {
    let expression = document.getElementById("display").value;
    expression = expression.replace(/√/g, "Math.sqrt"); // just in case
    document.getElementById("display").value = eval(expression);
  } catch (e) {
    document.getElementById("display").value = "Error";
  }
}

function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}


