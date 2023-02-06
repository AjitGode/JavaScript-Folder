let obj = [{
    EmpId: undefined,
    name: "Ajit",
    age: 23,
    salary: undefined
}]

obj.forEach((el) => {
    for (let key in el) {
        if (el[key] == undefined) {
            delete el[key]
        }
    }
})
console.log(obj)


// another way to print object without undefined properites


let obj2 = [{
    name: "Ajit",
    age: 23,
    salary: undefined
},
{
    EmpId: undefined,
    name: "Sanket",
    age: 24,
    salary: undefined
},
{
    name: "Amol",
    age: 23,
    salary: undefined,
    mob: undefined
}
]


let objNumber;

for (let i = 0; i < obj2.length; i++) {
    for (let key in obj2[i]) {

        objNumber = obj2[i]
        if (objNumber[key] == undefined) {
            delete objNumber[key]
        }
    }
}

console.log(obj2)