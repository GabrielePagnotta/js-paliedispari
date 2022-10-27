// es1:
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt("inserisci la parola da controllare");
let inverso = "";
let condizione1 = console.log (`${parola} è una parola palindroma`)
let condizione2 = console.log (`${parola} non è una parola palindroma`)


function parolapalindroma (condizione1, condizione2){
    let parola = prompt("inserisci la parola da controllare");
    let inverso = "";
    


    for (let i = parola.length -1 ; i >= 0; i--) {
    
        let palindroma = inverso += parola[i];
    }
    
    if(parola === inverso){
        console.log (`${parola} è una parola palindroma`)
    }
    
    else if (parola !== inverso){
        console.log (`${parola} non è una parola palindroma`)
    }
    
}