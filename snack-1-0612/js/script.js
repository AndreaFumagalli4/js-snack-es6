// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI

const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'ghepardo', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'coccodrillo', famiglia: 'coccodrilidi', classe: 'rettili' },
    { nome: 'struzzo', famiglia: 'Struthionidae', classe: 'uccelli' },
    { nome: 'cobra', famiglia: 'elapidae', classe: 'rettili' },
    { nome: 'zebra', famiglia: 'equidi', classe: 'mammiferi' },
    { nome: 'anaconda', famiglia: 'boidi', classe: 'rettili' },
];

const animaliMammiferi = animali.filter((animale) => {
    if (animale.classe === 'mammiferi') {
        return true;
    }
    return false;
});

console.log(animaliMammiferi);
