const num = parseFloat(prompt("Digite um número para ser mutiplicado até 20"));
let resultado = "";

for (let i = 1; i <= 20; i++) {
  resultado += "-> " + num + "x" + i + "=" + num * i + "\n";
}

alert("Resultado da Tabuada de " + num + ":\n\n" + resultado);
