/*OPERADORES typeof e delete
*/


//------------ TYPE OF  --------------//
// const myNumber = 20
// const myString = "Olá, sou uma string"

// const myObject = {
//     name: "Object",
// }

// console.log(typeof myObject);


//------------ DELETE

const myObject = {
    name: "Object",
    age : 20,
    height: 1.7
}

delete myObject.name
console.log(myObject);