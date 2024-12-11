console.log('It is working')

// 1) TIPI DI DATO PRIMITIVO IN TYPESCRIPT
// STRING
// NUMBER
// BOOLEAN
// UNDEFINED
// NULL
// ANY

// 2)  Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript
const myName: string = 'Umberto'
const myAge: number = 32
const TSSkill: boolean = true

//3) Tipizza il parametro della seguente funzione: const greet = (name) => {  return "Ciao " + name }
const greet = (name: string) => {  return "Ciao " + name }
console.log(greet(myName))

//4) Specifica il tipo di ritorno della seguente funzione: const sum = (a: number, b: number) => {  return a + b }
const sum = (a: number, b: number):number => {  return a + b }
console.log('tipo del valore di return della funzione sum: ', typeof sum(3,7))

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const totalPrice = (price:number): number => {
    return price + (price*0.22)
}

console.log('Final price: ', totalPrice(100))

// 6)  Crea una funzione che concateni due stringhe e restituisca la lunghezza totale
const concatString = (word1:string, word2:string):number => {
    return (word1.concat(word2)).length
}

console.log('String lenght: ', concatString('umberto', 'tramontano'))

// 7) Cos'è un Type Union e come si scrive?
/* Una type union permette di dichiarare il tipo di una variabile unendo due o più tipi insieme.
Se dichiaro una variabile posso ad esempio assegnargli il tipo string e il tipo number e auqel punto posso assegnare a quella variabile sia un valore numerico che
un valore di tipo stringa */
// Esempio
let variable: string | number
variable = 'umberto'
variable = 32
//questa operazione non mi da errori

// 8) Crea una variabile che possa contenere un numero, null o undefined

let multiTypeVariable: number | null | undefined

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type SpecialType = 'M' | 'TU' | 'W' | 'TH' | 'F' | 'SA' | 'S'

// 10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]

const numbers: number[] = [1, 2, 3]
const numbers2: Array<number> = [1, 2, 3]

// 11)  Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
const tupla: [string, string, string, number, number] = ['umberto', 'tramontano', 'marsico', 32, 100]

// 12) Qual è la differenza tra type e interface?
// Una INTERFACE viene utilizzata per creare uno schema con cui creare oggetti 

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface Person {
    firstname: string,
    lastname: string,
    age: number
}

const person1: Person = {
    firstname: 'Umberto',
    lastname: 'Tramontano',
    age: 32
}

//con questa interface devo inserire obbligatoriamente tutte le proprietà richieste 

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface User {
    email: string,
    phoneNumber?: number
}
//in questa interface ho una proprietà (phoneNumber) opzionale, per questo posso dichiarare un oggetto sia con entrambe le proprietà che soltanto con la proprietà email

const user1: User = {
    email: '123@123.net',
    phoneNumber: 123123
}

const user2: User = {
    email: 'topo@gigo.zurli'
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface Student {
    name: string,
    grade: number,
}

const student1: Student = {
    name: 'Aldo',
    grade: 33
}

const student2: Student = {
    name: 'Giacomo',
    grade: 50
}

const arrayOfStudent: Student[] = []

arrayOfStudent.push(student1)
arrayOfStudent.push(student2)

console.log(arrayOfStudent)

// 16)  Crea un'interfaccia base "Veicolo" e estendila per creare "Auto"

interface Vehicle {
    brand: string,
    model: string,
    year: number
}

interface Auto extends Vehicle {
    numOfWheel: number,
    numOfDoors: number,
    fuel: string
}

// 17) Crea un oggetto che implementi l'interfaccia Auto
const myAuto: Auto = {
    brand: 'Alfa',
    model: 'Giulietta',
    year: 2011,
    numOfWheel: 4,
    numOfDoors: 5,
    fuel: 'diesel'
}

// 18) Cosa sono i Generics in TypeScript?
// I GENERICS sono tipi di dato passato come parametro a una interface pre renderla più generica e riutilizzabile
// ad esempio posso dichiarare una funzione indicando come parametro degli argomenti un tipo generico, che indicherò al momento di invocare la funzione

// 19) È possibile avere più tipi generici in un'interfaccia?
//Si
interface Age2<T, K> {
    (age: T, name: K)
}

const myAge2: Age2<number, string> = (age: number, name:string) => {
    return name + ' ha ' + age + ' anni!'
}

console.log(myAge2(32, 'umberto'))
// 20)  Crea un'interfaccia generica per una risposta API

interface ApiResp<T> {
    status: number,
    message: string,
    data: T
}

