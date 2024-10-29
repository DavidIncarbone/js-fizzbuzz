"use-strict";
console.clear();

// *Consegna:*
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// *Prima di partire a scrivere codice poniamoci qualche domanda:*
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// *Consigli del giorno:*
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// OBIETTIVO

// 1 - DARE AI NUMERI DIVISIBILI SIA PER 3 CHE PER 5 VALORE STRINGA "FIZZBUZZ"
// 2 - DARE AI NUMERI DIVISIBILI PER 3 VALORE STRINGA "FIZZ"
// 3 - DARE AI NUMERI DIVISIBILI PER 5 VALORE STRINGA "BUZZ"


// Declare / Init Variables

let fizz = "Fizz";
let buzz = "Buzz";
let fizzBuzz = fizz + buzz;

// Start


for (let i = 1; i <= 100; i++) {


    if (i % 3 === 0 && i % 5 === 0) {

        console.log(fizzBuzz);

    } else if (i % 3 === 0) {

        console.log(fizz);

    } else if (i % 5 === 0) {

        console.log(buzz);

    } else {

        console.log(i);

    }

}



