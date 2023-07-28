const pariDispari = prompt("Scegli pari o dispari");
const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));

function random() {
  return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}

let sum = random + numeroUtente;
if (pariDispari == "pari" && sum % 2 == 0) {
  console.log("hai vinto");
} else if (pariDispari == "dispari" && sum % 2 != 0) {
  console.log("hai vinto");
} else {
  console.log("hai perso");
}
