function compairObject(obj1,obj2){
     return JSON.stringify(obj1)===JSON.stringify(obj2)
}

let obj1 = {
    name:'Ajit',
    age:24
}

let obj2 = {
    name:"Ajit",
    age:24
}

console.log(compairObject(obj1,obj2)) // true
