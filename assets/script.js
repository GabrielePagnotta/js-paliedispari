// es1:

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// let parola = prompt("inserisci la parola da controllare");
// let inverso = "";
// let condizione_1 = console.log (`${parola} è una parola palindroma`)
// let condizione_2 = console.log (`${parola} non è una parola palindroma`)


//     function palindroma(){

//         for (let i = parola.length -1 ; i >= 0; i--) {
    
//         let palindroma = inverso += parola[i];
//     }
//     return inverso;
 
//     }
   

    
//     if(parola === palindroma()){

//         console.log (`${parola} è una parola palindroma`)

//     } else if (parola !== palindroma()){
//         console.log (`${parola} non è una parola palindroma`)
        
//     }





// es:2 
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
   
   
    function somma(){
        let somma = scegli_numero + genera_numero
    }

    for (let index = 0; index < 10; index++) {
        
        
    
    let scegli = prompt(`scegli pari o dispari`)


    if (scegli != "pari" && scegli !="dispari") {
    alert("devi scegliere se pari o dispari");
    
    }

    let scegli_numero = parseInt(prompt("inserisci un numero da 1 a 5"));

    let genera_numero = Math.floor(Math.random() * 5)

    let pc = alert(`pc ha inserito ${genera_numero}` )

    let somma = scegli_numero + genera_numero

    if (somma % 2 == 0 && scegli === "pari") {
        alert("hai vinto")
    }

    else if (somma % 2 == 0 && scegli !== "pari") {
        alert("pc ha vinto")
    }

    else if (somma % 2 != 0 && scegli === "dispari"){
        alert("hai vinto")
    }

    else if (somma % 2 != 0 && scegli !== "dispari"){
        alert("pc ha vinto")
    }

    }

    

     

        
    
    
    
   

    

    
    

    










         
         
    
    
   
   


    
    
