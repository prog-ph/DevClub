 /*
    ESTRUTURA DE REPETIÇÃO - FOR IN
*/

const student = {
    name: "Caio",
    age: 17,
    genre: "male"
}

// console.log(student["name"]);
 for (const property in student) {
    console.log(`${property}:${student [property]}`)}