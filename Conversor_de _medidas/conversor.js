const metro = parseFloat(prompt("Digite um valor em metros"));
const medidas = prompt(
  "Em qual medida você deseja converter?  \nmm \ncm \ndm \ndam \nhm \nkm"
);
switch (medidas) {
  case "mm":
    alert(metro * 1000);
    break;
  case "cm":
    alert(metro * 100);
    break;
  case "dm":
    alert(metro * 10);
    break;
  case "dam":
    alert(metro / 10);
  case "hm":
    alert(metro / 100);
    break;
  case "km":
    alert(metro / 1000);
    break;
  default:
    alert("Opção invalida");
    break;
}
