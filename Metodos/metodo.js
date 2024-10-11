let pessoa = {
  nome: "Isaac",
  idade: 26,
  ocupacao: "Desempregado",
  dizerOla() {
    console.log(
      "Iae " +
        this.nome +
        " ta veio pra porra, ja ta com " +
        this.idade +
        " e ainda ta " +
        this.ocupacao
    );
  },
};

// functions recursivas //

function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}

dividir(1024);

console.log(pessoa);
pessoa.dizerOla();

// Functions anônimas //

function somar(a, b) {
  return a + b;
}
let operacao = somar;

console.log(operacao(5, 4));

operacao = function subtracao(a, b) {
  return a - b;
};

console.log(operacao(5, 4));

const calculadora = {};
calculadora.somar = somar;
calculadora.subtrair = subtrair;
calculadora.multiplicar = function (a, b) {
  return a * b;
};
console.log(calculadora.multiplicar(3, 7));
