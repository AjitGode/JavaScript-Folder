let Student = {
    name:"Ajit Gode",
    age:24,
    address:"Pune",
    skill:['Angular','Javascript',"typescript"]
}

let obj =Object.keys(Student)

console.log(obj);

// convert obj into json 

let json = JSON.stringify(Student)
console.log(json)