/*
   Filter
   -Cria um novo array, a parti da array   percorrida (array original)
   - Cria um novo array, APENAS com os elementos filtrados
   - Aceita 3 paramnetros
     -  item do array
     - index
     - array completo
*/

const list = [
    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "Joao", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },
];



const justVips = list.filter(client =>  client.vip)
console.log(justVips);


const students = [
    { name: "Rodolfo", finalResult:"approved"},
    { name: "Maria", finalResult:"disapproved" },
    { name: "Joao", finalResult:"approved"},
    { name: "Bruno", finalResult:"approved" },
    { name: "Carla", finalResult:"disapproved" },
    { name: "Ana", finalResult:"disapproved" },
    { name: "Julio", finalResult:"approved" },
];


const newStudentList = students.filter( student => student.testGrade < 7)


