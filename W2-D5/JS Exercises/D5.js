/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log(pets.sort());
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(pets.reverse());
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
if (pets.length > 1) {

  var primoElemento = pets.splice();
  pets.push(primoElemento);
}

console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
function generaTargaRandom( ) { 
  const lettere='ABCDEFGHILMNOPQRSTUVZ'
  const numeri= '0123456789' 
  let targa= ' '
  for (let i = 0; i < 7; i++) {
    targa += lettere[Math.floor(Math.random() * lettere.length)];
    
  }

  for (let i = 0; i < 1; i++) {
    targa += numeri[Math.floor(Math.random() * numeri.length)];
    
  }
return targa;
}
cars.forEach((car) => {
  car.targa = generaTargaRandom();
});

console.log(cars)
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
var nuovaMacchina={
    brand: 'Alfaromeo',
    model: 'Giulia',
    color: 'Verde',
    trims: ['TI', 'Quadrifoglio'],

}
cars.push(nuovaMacchina)

cars.forEach(function(car) {
  car.trims.pop();
});


console.log(cars)


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/


const justTrims = []

cars.forEach(function(cars) {
  if (cars.trims.length > 0) {
    
    justTrims.push(cars.trims);
    
  }
}

)
console.log(justTrims);


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
cars.forEach(function(car) {
  
  var firstLetter = car.color.charAt(0);
  
  if (firstLetter === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
});
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;

while (i < numericArray.length && numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/


const charactersArray = ['g', 'n', 'u', 'z', 'd'];
const alphabetItaliano = 'abcdefghijklmnopqrstuvwxyz';

const posizioneArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const character = charactersArray[i];
  switch (character) {
    case 'a':
      posizioneArray.push(1);
      break;
    case 'b':
      posizioneArray.push(2);
      break;
    case 'c':
      posizioneArray.push(3);
      break;
    case 'd':
      posizioneArray.push(4);
      break;
    case 'e':
      posizioneArray.push(5);
      break;
    case 'f':
      posizioneArray.push(6);
      break;
    case 'g':
      posizioneArray.push(7);
      break;
    case 'h':
      posizioneArray.push(8);
      break;
    case 'i':
      posizioneArray.push(9);
      break;
    case 'j':
      posizioneArray.push(10);
      break;
    case 'k':
      posizioneArray.push(11);
      break;
    case 'l':
      posizioneArray.push(12);
      break;
    case 'm':
      posizioneArray.push(13);
      break;
    case 'n':
      posizioneArray.push(14);
      break;
    case 'o':
      posizioneArray.push(15);
      break;
    case 'p':
      posizioneArray.push(16);
      break;
    case 'q':
      posizioneArray.push(17);
      break;
    case 'r':
      posizioneArray.push(18);
      break;
    case 's':
      posizioneArray.push(19);
      break;
    case 't':
      posizioneArray.push(20);
      break;
    case 'u':
      posizioneArray.push(21);
      break;
    case 'v':
      posizioneArray.push(22);
      break;
    case 'w':
      posizioneArray.push(23);
      break;
    case 'x':
      posizioneArray.push(24);
      break;
    case 'y':
      posizioneArray.push(25);
      break;
    case 'z':
      posizioneArray.push(26);
      break;
    default:
      posizioneArray.push(-1); // Carattere non trovato
      break;
  }
}

console.log(posizioneArray);
