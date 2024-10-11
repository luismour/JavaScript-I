const pi = 3.14;

function calcularAreaTri() {
  const base = prompt("Informe a base do triângulo:");
  const altura = prompt("Informe a altura do triângulo");
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  const base = prompt("Informe a base do retângulo:");
  const altura = prompt("Informe a altura do retângulo:");
  return base * altura;
}

function calcularAreaQuadrado() {
  const lado = prompt("Informe o lado do quadrado:");
  return lado * lado;
}

function calcularAreaTrapezio() {
  const baseMaior = prompt("Informe a base maior do trapézio:");
  const baseMenor = prompt("Informe a base menor do trapézio:");
  const altura = prompt("Informe a altura do trapézio:");
  return (baseMaior * baseMenor * altura) / 2;
}

function calcularAreaCirculo() {
  const raio = prompt("Informe o raio do circulo");
  return raio * raio * pi;
}

function exibirMenu() {
  return parseInt(
    prompt(
      "Calculadora geométrica\n" +
        "Escolha a opção que você deseja calcular\n" +
        "1. Área do quadrado\n" +
        "2. Área do Triangulo\n" +
        "3 .Área do Retangulo\n" +
        "4. Aréa do Trapézio\n" +
        "5. Área do Circulo\n" +
        "6. Sair"
    )
  );
}

function executar() {
  let opcao = "";
  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case 1:
        resultado = calcularAreaQuadrado();
        break;
      case 2:
        resultado = calcularAreaTri();
        break;
      case 3:
        resultado = calcularAreaRetangulo();
        break;
      case 4:
        resultado = calcularAreaTrapezio();
        break;
      case 5:
        resultado = calcularAreaCirculo();
        break;
      case 6:
        alert("Saindo...");
        break;

      default:
        alert("Opção inválida");
        break;
    }
    if (resultado) {
      alert("Resultado " + resultado);
    }
  } while (opcao !== 6);
}

executar();
