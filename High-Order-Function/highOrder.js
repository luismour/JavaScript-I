function calcular(a, b, operacao) {
  console.log("Realizando uma operação.");
  let resultado = operacao(a, b);
  return resultado;
}


function somar(x, y) {
  console.log("Realizando soma.");
  return x + y;
}
calcular(3, 5, somar);

console.log(somar); // Retorna a própria função
console.log(somar(1, 1)); // Chama a função (retorna o resultado da função)

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["Maça", "Banana", "Laranja", "Limão", "Uva", "Banana"];
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}

lista.forEach(exibirElemento);
