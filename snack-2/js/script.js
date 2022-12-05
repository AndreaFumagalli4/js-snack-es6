/**
 * 
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
 */


const cars = [
    {
        nome : 'volvo',
        modello : 'xc60',
        alimentazione : 'benzina'
    },
    {
        nome : 'mazda',
        modello : '3',
        alimentazione : 'diesel'
    },
    {
        nome : 'tesla',
        modello : 'model y',
        alimentazione : 'elettrica'
    },
    {
        nome : 'bmw',
        modello : 'x3',
        alimentazione : 'elettrica'
    },
    {
        nome : 'seat',
        modello : 'ibiza',
        alimentazione : 'diesel'
    },
    {
        nome : 'volvo',
        modello : 'xc60',
        alimentazione : 'benzina'
    },
    {
        nome : 'fiat',
        modello : 'tipo',
        alimentazione : 'benzina'
    },
    {
        nome : 'lamborghini',
        modello : 'urus',
        alimentazione : 'benzina'
    },
    {
        nome : 'bentley',
        modello : 'continental',
        alimentazione : 'diesel'
    },
    {
        nome : 'tesla',
        modello : 'model 3',
        alimentazione : 'elettrica'
    }
];

const benzina = [];
const diesel = [];
const elettrica =[];

for (let i = 0; i < cars.length; i++) {
    const currentCar = cars[i];
    if (currentCar.alimentazione === 'benzina') {
        benzina.push(currentCar);
    } else if (currentCar.alimentazione === 'diesel') {
        diesel.push(currentCar);
    } else {
        elettrica.push(currentCar);
    }
}

console.log(benzina);
console.log(diesel);
console.log(elettrica);

