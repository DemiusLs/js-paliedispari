// Esercizio 1 
const word = "Rossor";
// prompt("inserisci una parola e ti dirò se palindroma");
// per il momento commentata per evitare il popup

console.log(creaArray(word));




function creaArray(stringa) {
    let result = false;
    let message;


    for (i = 0; i < stringa.length / 2; i++) {

        let lowerStr = stringa.toLowerCase()
        let lastChar = stringa.length - 1;

        if (lowerStr[i] == lowerStr[lastChar - i]) {

            // console.log(`i caratteri in posizione ${i} e ${lastChar - i} sono uguali, proseguo nella ricerca`);
            result = true;

        } else {
            // message = `i caratteri in posizione ${i} e ${lastChar - i} non sono uguali, la parola non è palindroma`;
            result = false;
            break;
        }
    }
    if (result == true) {
        message = "la parola è palindroma";
    } else {
        message = "la parola non è palindroma";
    }
    return message;


}

// Esercizio 2 

const usernNum = "4";
const userChoice = "pari"
// prompt("Inserisci un numero da 1 a 5")
// prompt("Scegli pari o dispari")
let userNumInt = parseInt(usernNum);

let computerNumInt = getRandom(1, 5);
console.log(computerNumInt);

console.log(getWinner(userNumInt, computerNumInt, userChoice));



function getRandom(min, max) {

    return random = Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWinner(playerNum, pcNum, playerChoice) {

    let summ = playerNum + pcNum;
    let numb = "";
    let message;

    if (summ % 2 === 0) {

        numb = "pari";
    } else {
        numb = "dispari";
    }


    if (playerChoice == numb) {

        message = `player vince, ${playerNum} + ${pcNum} è ${numb}`;
    } else {
        message = `player perde, ${playerNum} + ${pcNum} è ${numb}`;
    }

    return message;

}







