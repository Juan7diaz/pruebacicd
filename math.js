
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => {

  if(b === 0) return "No se puede dividir por 1";
  //devuelve un numero con 2 decimales
  return parseFloat((a / b).toFixed(2));
};
const esPar = (a) => {
  if(a % 2 === 0) return true;
  return false;
}


module.exports = {
  suma,
  resta,
  multiplicacion,
  division
};