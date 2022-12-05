/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */

const zucchine = [
    {
        type : 'romana',
        peso : 0.5,
        lunghezza : '5 cm',
    },
    {
        type : 'antartide',
        peso : 2.5,
        lunghezza : '1 m',
    },
    {
        type : 'cilena',
        peso : 1,
        lunghezza : '4 cm',
    },
    {
        type : 'messicana',
        peso : 1.2,
        lunghezza : '52 cm',
    },
    {
        type : 'cubana',
        peso : 0.6,
        lunghezza : '13 cm',
    },
    {
        type : 'norvegese',
        peso : 2.9,
        lunghezza : '15 cm',
    },
    {
        type : 'congolese',
        peso : 3,
        lunghezza : '25 cm',
    },
    {
        type : 'giapponese',
        peso : 5,
        lunghezza : '33 cm',
    },
    {
        type : 'australiana',
        peso : 4.5,
        lunghezza : '57 cm',
    },
    {
        type : 'canadese',
        peso : 5.5,
        lunghezza : '40 cm',
    }
];

console.log(zucchine);

let weight = 0;

let media;

for ( let i = 0; i < zucchine.length; i++) {
    weight += zucchine[i].peso;
}

console.log(weight, (weight / zucchine.length));