const primeiroNome = prompt("Informe seu primeiro nome");
const sobrenome = prompt("Informe seu primeiro sobrenome");
const campoDeEstudo = prompt("Informe seu campod de estudo");
const nascimento = prompt("Informe seu ano de nascimento");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    primeiroNome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    campoDeEstudo +
    "\nIdade: " +
    (2022 - nascimento)
);
