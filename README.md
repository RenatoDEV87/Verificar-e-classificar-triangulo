# E Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

# Exercício 06 – Verificação e Classificação de Triângulo

---

## 📑 Índice

1. [📖 Descrição](#descrição)  
2. [💻 Código](#código)  
3. [🚀 Como Executar](#como-executar)   
4. [🛠️ Tecnologias Utilizadas](#tecnologias-utilizadas)  
5. [📜 Licença](#licença)  

---

## Descrição

Este programa em JavaScript lê três valores numéricos que representam os lados de um possível triângulo e verifica:

1. Se os lados formam realmente um triângulo.
2. Qual o tipo do triângulo:
   - **Equilátero**: todos os lados iguais.
   - **Isósceles**: dois lados iguais.
   - **Escaleno**: todos os lados diferentes.

A verificação é feita utilizando estruturas de decisão com `if` e `else`.

# Regras utilizadas

### Para formar um triângulo:

- A < B + C  
- B < A + C  
- C < A + B

### Classificação:

- **Equilátero**: A = B = C  
- **Isósceles**: A = B ou A = C ou B = C  
- **Escaleno**: A ≠ B e B ≠ C e A ≠ C

---

## Código

Abaixo está o código-fonte do programa:

```JavaScript
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

```

---

## Como Executar

🛠️ Instruções para executar localmente

1. Instale o Node.js se ainda não tiver: https://nodejs.org

2. Abra o terminal e instale o prompt-sync (usado para entrada do usuário):

```
npm install prompt-sync
```

3. Salve o arquivo como `exercicio_06.js` e execute com:

```
node exercicio_06.js
```

---

## Tecnologias Utilizadas

- Linguagem: JavaScrpit
- Node.Js

---

## Licença

Este projeto está licenciado sob a MIT License.


