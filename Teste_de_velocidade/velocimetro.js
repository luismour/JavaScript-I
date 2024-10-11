const veiculo1 = prompt("Informe o nome desse veiculo");
const velocidade1 = parseFloat(prompt("Informe a velocidade de um veiculo:"));
const veiculo2 = prompt("Informe o nome de outro veiculo:");
const velocidade2 = parseFloat(prompt("Informe a velocidade desse veiculo"));

if (velocidade1 > velocidade2) {
  alert(veiculo1 + " é mais rápido do que " + veiculo2);
} else if (velocidade2 > velocidade1) {
  alert(veiculo2 + " é mais rápido do que " + veiculo1);
} else {
  alert(veiculo1 + " e " + veiculo2 + " possuem velocidades iguais.");
}
