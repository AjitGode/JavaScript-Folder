// lowest number 


let arr = [33,55,66,77,-89,56]

let lowest = arr.reduce((a,b)=>{
    return Math.min(a,b)
  
})

console.log(lowest)


// object

let employee = [
    {
        firstName:"Ajit",
        lastName:"Gode",
        skill:["Angular","Html","Css"]
    },
    {
        firstName:"Amol",
        lastName:"Vetal",
        skill:["Angular","Html","Css"]
    },
    {
        firstName:"Sanket",
        lastName:"Modhe",
        skill:["Angular","Html","Css"]
    }
]

employee.forEach((el)=>{
    console.log(el.firstName+':'+el.skill.length)
})



let pro = new Promise((resolve,reject)=>{
    let a=10;
    let b=10
    if(a=b){
        resolve("Equal")
    }else{
        reject("Not equal")
    }
})



class Person {
     firstName="Ajit"
     lastName="Gode"
     
}




let a =10;
let b= 100;

let ternary = a>b?"A is greater":"b is greater"

