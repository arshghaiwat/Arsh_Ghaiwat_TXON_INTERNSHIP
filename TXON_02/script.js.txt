let result = document.getElementById("result");

function getResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function deleteLastChar() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  let calculation = eval(result.value);
  result.value = calculation;
}
