class Pessoa {
  nome;
  idade;
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.birthday = -idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const miguel = new Pessoa("Miguel", 19);

const heloiza = new Pessoa("Heloiza", 18);

console.log(heloiza);

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  }
}

compararPessoas(miguel, heloiza);
