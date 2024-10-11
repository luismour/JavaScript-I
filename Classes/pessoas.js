class Person {
  name;
  kg;
  height;
  constructor(name, kg, height) {
    this.name = name;
    this.kg = kg;
    this.height = height;
  }
  calcularImc() {
    return this.kg / (this.height * this.height);
  }

  classificarImc() {
    const imc = this.calcularImc();
    if (imc < 18.5) {
      return `${this.name} está abaixo do peso `;
    } else if (imc >= 18.5 && imc <= 25) {
      return `${this.name} está com o peso normal `;
    } else if (imc > 25 && imc <= 29.9) {
      return `${this.name} está com o sobrepeso `;
    } else {
      return `${this.name} está obeso `;
    }
  }
}

const miguel = new Person("Miguel", 100, 1.75);

console.log(miguel.classificarImc());
