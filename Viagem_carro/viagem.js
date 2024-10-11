const priceGasolina = 5.79;
let valor = 0;
const priceEtanol = 4;
const kilometros = prompt("Quantos KM terá a sua viagem?");
const medida = prompt(
  "Qual é o gasto médio de combustível seu veículo faz p/KM?"
);
let fuelType = prompt(
  "Qual o tipo de combustível do seu carro?" + "a1.Gasolinaa2.Etanol"
);

switch (fuelType) {
  case "1":
    valor = priceGasolina / medida;
    let valorFinal = valor * kilometros;
    document.write(valorFinal);
    break;

  case "2":
    valor = priceEtanol / medida;
    let valorFinalE = valor * kilometros;
    document.write(valorFinalE);
    break;
  default:
    break;
}
