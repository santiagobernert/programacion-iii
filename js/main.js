let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let op = document.getElementById("op").value;
var res = document.getElementById("res");

let sumar = () => {
  return num1 + num2;
};

let restar = () => {
  return num1 - num2;
};

let multiplicar = () => {
  return num1 * num2;
};

let dividir = () => {
  return num1 / num2;
};

function calc(op) {
  var result = 0;
  switch (op) {
    case "+":
      result = sumar();
      break;
    case "-":
      result = restar();
      break;
    case "*":
      result = multiplicar();
      break;
    case "/":
      result = dividir();
      break;

    default:
      result = sumar();
      break;
  }
  res.innerText = result;
}
