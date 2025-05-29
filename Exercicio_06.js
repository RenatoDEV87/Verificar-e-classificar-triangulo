const prompt = require('prompt-sync')();

// Solicita ao usuário os três lados do triângulo
let ladoA = parseFloat(prompt("Digite o lado A do triângulo: "));
let ladoB = parseFloat(prompt("Digite o lado B do triângulo: "));
let ladoC = parseFloat(prompt("Digite o lado C do triângulo: "));

// Verifica se os lados formam um triângulo
if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  console.log("Os lados formam um triângulo.");

  // Verifica o tipo de triângulo
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Tipo: Triângulo Equilátero");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Tipo: Triângulo Isósceles");
  } else {
    console.log("Tipo: Triângulo Escaleno");
  }

} else {
  console.log("Os lados fornecidos NÃO formam um triângulo.");
}
