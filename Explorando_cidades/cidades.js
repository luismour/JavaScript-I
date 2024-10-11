const nome = prompt("Qual é o seu nome?");
let cidades = "";
let contagem = 0;

let continuar = prompt("Você ja visitou alguma cidade? (Sim ou Não)");

while (continuar === "Sim") {
  let cidade = prompt("Qual o nome da cidade visitidada?");
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}

alert(
  "Turista: " +
    nome +
    "\nQuantidade de cidades visitadas: " +
    contagem +
    "\nCidades visitadas:\n" +
    cidades
);
