class Carro {
  marca;
  cor;
  gastoMedio;
  constructor(marca, cor, gastoMedio) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = 1 / gastoMedio;
  }

  calculoGasolina(km, precoLitro) {
    return km * this.gastoMedio * precoLitro;
  }
}
const uno = new Carro("Fiat", "Branco", 12);

const palio = new Carro("Fiat", "Preto", 10);

console.log(uno.calculoGasolina(70, 5));
console.log(palio.calculoGasolina(70, 5));
