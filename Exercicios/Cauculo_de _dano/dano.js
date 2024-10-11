const name1 = prompt("Qual o nome do seu personagem?");
const atk = parseFloat(prompt("Qual o poder de ataque do seu personagem?"));

const name2 = prompt("Qual o nome do seu adversário?");
let life = parseFloat(prompt("Quantos pontos de vida ele possui?"));
const def = prompt("Qual o poder de defesa do seu adversáro ");
const shield = prompt("Ele possui escudo? (Sim ou Não)");

let dmg = 0;

if (atk > def && shield === "Não") {
  dmg = atk - def;
} else if (atk > def && shield === "Sim") {
  dmg = (atk - def) / 2;
}

life -= dmg;

alert(name1 + " causou " + dmg + " pontos de dano em " + name2);
alert(
  name1 +
    "\nPoder de ataque: " +
    atk +
    "\n\n" +
    name2 +
    "\nPontos de vida: " +
    life +
    "\nPoder de defesa: " +
    def +
    "\nPossui escudo: " +
    shield
);
