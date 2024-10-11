class Carro {
  constructor(modelo, marca, cor, gastoMedio) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = 1 / gastoMedio;
    this.modelo = modelo;
  }

  calculoGasolina(km, precoLitro) {
    return km * this.gastoMedio * precoLitro;
  }
}

// Obtendo informações do usuário usando prompt
const modelo = prompt("Digite o modelo do seu carro:");
const marca = prompt("Digite a marca do seu carro:");
const cor = prompt("Digite a cor do seu carro:");
const consumo = parseFloat(
  prompt("Digite o consumo de combustível por km do seu carro(em litros):")
);

const carro = new Carro(modelo, marca, cor, consumo);

// Obtendo informações para cálculo do gasto
const distanciaKm = parseFloat(prompt("Digite a distância a percorrer em km:"));
const precoLitro = parseFloat(
  prompt("Digite o preço do litro de combustível:")
);

// Calculando e exibindo os gastos
document.write(
  `Gasto estimado para o seu carro: ${carro.modelo}, ${carro.marca}, ${
    carro.cor
  }, é de ${carro.calculoGasolina(distanciaKm, precoLitro).toFixed(2)} reais`
);
On;
