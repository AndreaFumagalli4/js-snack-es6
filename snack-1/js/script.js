// 1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
// 2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
// 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.

const student = {
    'nome' : 'Pippo',
    'cognome' : 'Rossi',
    'age' : 24
}

for (let key in student) {
    console.log(key + ' = ' + student[key]);
}

const students = [];

students.push(student);
console.log(students);