// const pariDispari = prompt("Scegli pari o dispari");
// const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));

// function random() {
//   return Math.floor(Math.random() * (5 - 1 + 1) + 1);
// }

// let sum = random + numeroUtente;
// if (pariDispari == "pari" && sum % 2 == 0) {
//   console.log("hai vinto");
// } else if (pariDispari == "dispari" && sum % 2 != 0) {
//   console.log("hai vinto");
// } else {
//   console.log("hai perso");
// }

const parola = prompt("Scrivi una parola");

const risultatoPalindromia = paloindromia(parola);

if (risultatoPalindromia) {
  console.log("la parola " + parola + " è palindroma");
} else {
  console.log("la parola " + parola + " NON è palindroma");
}

function paloindromia(parola) {
  let parolaAlContrario = "";
  for (let i = 0; i < parola.length; i++) {
    let contrario = parola[i];
    parolaAlContrario = contrario + parolaAlContrario;
  }
  return parola == parolaAlContrario;
}
