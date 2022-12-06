/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */

const peopleList = [
    {
        firstName: 'Pippo',
        lastName: 'Blabla',
        age: 68
    },
    {
        firstName: 'Minnie',
        lastName: 'Bohboh',
        age: 14
    },
    {
        firstName: 'Norberto',
        lastName: 'Rossi',
        age: 12
    },
    {
        firstName: 'Genoveffa',
        lastName: 'Brambilla',
        age: 22
    },
    {
        firstName: 'Norberta',
        lastName: 'Buado',
        age: 50
    },
    {
        firstName: 'Gianna',
        lastName: 'Lollino',
        age: 70
    },
    {
        firstName: 'Gino',
        lastName: 'Paoli',
        age: 34
    },
    {
        firstName: 'Paolo',
        lastName: 'Ginestro',
        age: 9
    },
    {
        firstName: 'Paola',
        lastName: 'Paolini',
        age: 13
    },
    {
        firstName: 'Riccardo',
        lastName: 'Nostradamus',
        age: 17
    },
];

let newPeopleList = peopleList.map( (person) => {
    const isMaggionrenne = person.age >= 18;
    return `${person.firstName} ${person.lastName}, ${isMaggionrenne ? 'può guidare' : 'non può guidare'}`;
});

console.log(newPeopleList);

