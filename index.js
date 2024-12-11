console.log('It is working');
// 1) TIPI DI DATO PRIMITIVO IN TYPESCRIPT
// STRING
// NUMBER
// BOOLEAN
// UNDEFINED
// NULL
// ANY
// 2)  Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript
var myName = 'Umberto';
var myAge = 32;
var TSSkill = true;
//3) Tipizza il parametro della seguente funzione: const greet = (name) => {  return "Ciao " + name }
var greet = function (name) { return "Ciao " + name; };
console.log(greet(myName));
//4) Specifica il tipo di ritorno della seguente funzione: const sum = (a: number, b: number) => {  return a + b }
var sum = function (a, b) { return a + b; };
console.log('tipo del valore di return della funzione sum: ', typeof sum(3, 7));
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var totalPrice = function (price) {
    return price + (price * 0.22);
};
console.log('Final price: ', totalPrice(100));
// 6)  Crea una funzione che concateni due stringhe e restituisca la lunghezza totale
var concatString = function (word1, word2) {
    return (word1.concat(word2)).length;
};
console.log('String lenght: ', concatString('umberto', 'tramontano'));
// 7) Cos'è un Type Union e come si scrive?
/* Una type union permette di dichiarare il tipo di una variabile unendo due o più tipi insieme.
Se dichiaro una variabile posso ad esempio assegnargli il tipo string e il tipo number e auqel punto posso assegnare a quella variabile sia un valore numerico che
un valore di tipo stringa */
// Esempio
var variable;
variable = 'umberto';
variable = 32;
//questa operazione non mi da errori
// 8) Crea una variabile che possa contenere un numero, null o undefined
var multiTypeVariable;
// 10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11)  Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tupla = ['umberto', 'tramontano', 'marsico', 32, 100];
var person1 = {
    firstname: 'Umberto',
    lastname: 'Tramontano',
    age: 32
};
//in questa interface ho una proprietà (phoneNumber) opzionale, per questo posso dichiarare un oggetto sia con entrambe le proprietà che soltanto con la proprietà email
var user1 = {
    email: '123@123.net',
    phoneNumber: 123123
};
var user2 = {
    email: 'topo@gigo.zurli'
};
var student1 = {
    name: 'Aldo',
    grade: 33
};
var student2 = {
    name: 'Giacomo',
    grade: 50
};
var arrayOfStudent = [];
arrayOfStudent.push(student1);
arrayOfStudent.push(student2);
console.log(arrayOfStudent);
// 17) Crea un oggetto che implementi l'interfaccia Auto
var myAuto = {
    brand: 'Alfa',
    model: 'Giulietta',
    year: 2011,
    numOfWheel: 4,
    numOfDoors: 5,
    fuel: 'diesel'
};
var myAge2 = function (age, name) {
    return name + ' ha ' + age + ' anni!';
};
console.log(myAge2(32, 'umberto'));
