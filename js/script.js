console.log('JS OK');

/*chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/

// ? STEPS
/* 
1-Chiedere all'utente il numero di chilometri
2-Chiedere all'utente l'età
3-Calcolare prezzo del biglietto
 3a-calcolare il prezzo del biglietto se l'età è sotto i 18 anni -20%
 3b-calcolare il prezzo del biglietto se l'età è sopra 65 anni -40%
4-Stampare il risultato con massimo due decimali */


//! 1-Chiedere all'utente il numero di chilometri
const userKilometers = parseInt(prompt('Quanti chilometri vuoi percorrere?', '70'));
console.log(userKilometers);

//! 2-Chiedere all'utente l'età
const userAge = parseInt(prompt('Quanti anni hai?', '19'));
console.log(userAge);

//! 3-Calcolare prezzo del biglietto
let ticketPrice;

if((userAge > 18) && (userAge < 65)){
    ticketPrice = userKilometers * 0.21 ;
}
console.log(ticketPrice);

//! 3a-calcolare il prezzo del biglietto se l'età è sotto i 18 anni -20%
let discount18 = (ticketPrice / 100) * 20;
let discount65 = (ticketPrice / 100) * 40;
let ticketPriceDiscount;

//calcolo dello sconto
if(userAge < 18){
    ticketPriceDiscount = ticketPrice - discount18;
} else if (userAge > 65){
    ticketPriceDiscount = ticketPrice - discount65;
}

console.log(ticketPriceDiscount);
