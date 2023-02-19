/*
  MAP
  - Cria um novo array, a parti da array   percorrida (array original)
  - Cria um novo array, com a mesma quantidade de itens do array original
  - Aceita 3 parametros
      - Item do array
      - index
      - array completo

*/

const numbers = [1, 2, 3, 4]
const students = [
  { name: "Paulo", age: 18 },
  { name: "Miguel", age: 15 },
  { name: "Sarah", age: 12 },
  { name: "Pai", age: 37 },
  { name: "Mae", age: 34 },
];


// const newArray = numbers.map( (number) =>{
//   return number * 2
// })
// console.log(newArray);

const newStudents = students.map((student) => {
  const newStudent = {
    name: student.name + ' Da silva',
  }
  return newStudent;
})

console.log(newStudents)