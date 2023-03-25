

/// convert javascript object into josn format

let student= {
    name:"Ajit Gode",
    address:"Pune",
    qualification:"MCA",
    skills:['Javascript','Typescript','core java','Cypress']

}

// console.log(student.skills[1]);

let json = JSON.stringify(student);
console.log(json);

// // let timestamp = Date.now();
// let timestamp = new Date().getTime();
// console.log(timestamp)

