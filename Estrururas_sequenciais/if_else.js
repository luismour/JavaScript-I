const idade = prompt("Infome a sua idade:");

if (idade >= 18) {
  alert("Você é maior de idade");
} else {
  alert("Você é de menor");

  if (idade <= 12) {
    alert("Você é criança");
  }
}
