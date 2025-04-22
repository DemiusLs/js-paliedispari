const world = "Rossor";

// prompt("inserisci una parola e ti dirò se palindroma");
// per il momento commentata per evitare il popup



function creaArray(stringa) {
    let array = [];
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
            break
        }



    }


    if (result == true) {
        message = "la parola è palindroma"
    } else {
        message = "la parola non è palindroma"
    }
    return message;



}


console.log(creaArray("Rossor"));



