// const list = [
//     { name: "Rodolfo", vip: true },
//     { name: "Maria", vip: false },
//     { name: "Joao", vip: true },
//     { name: "Bruno", vip: true },
//     { name: "Carla", vip: false },
//     { name: "Ana", vip: true },
//     { name: "Julio", vip: false },
// ];
// const list02 = [
//     { name: "Rodolfo", vip: true, sector: "Black" },
//     { name: "Maria", vip: false, sector: "Green" },
//     { name: "Joao", vip: true, sector: "Black" },
//     { name: "Bruno", vip: true, sector: "Black" },
//     { name: "Carla", vip: false, sector: "Green" },
//     { name: "Ana", vip: true, sector: "Black" },
//     { name: "Julio", vip: false, sector: "Green" },
// // ];

// const student = [
//     { name: "Rodolfo", testGrade: 7 },
//     { name: "Maria", testGrade:  0 },
//     { name: "Joao", testGrade: 8 },
//     { name: "Bruno", testGrade: 9  },
//     { name: "Carla", testGrade: 3  },
//     { name: "Ana", testGrade: 2  },
//     { name: "Julio", testGrade: 10  },
// ];

// const students = [
//     { name: "Rodolfo", finalResult:"approved"},
//     { name: "Maria", finalResult:"disapproved" },
//     { name: "Joao", finalResult:"approved"},
//     { name: "Bruno", finalResult:"approved" },
//     { name: "Carla", finalResult:"disapproved" },
//     { name: "Ana", finalResult:"disapproved" },
//     { name: "Julio", finalResult:"approved" },
// ];


//------------ Resolução -----*///
// const newlist = list.map( client => {
//     const newlist = {
//         name: client.name,
//         vip: client.vip,
//         sector: client.vip ? "black" : "Green"
//     }

//     return newlist
// }) 
// console.log(newlist);

//------------ Resolução 02-----*///

// const approvedStudents = students.map(student => {
//     let approvedOrNot

//     if (student.testGrade >= 7) {
//         approvedOrNot = 'approved'
//     } else {
//         approvedOrNot = 'disapproved'
//     }

//     const students = {
//         name: student.name,
//         finalResult: approvedOrNot
//     }

//     return students
// })
// console.log(approvedStudents);