//Function are called as first class function in javascript
//string as parameter to function and string as return type

function Greet(word){
    console.log(`Hello ${word}`)
    return `Hello ${word}`
}

let q1 = Greet("Ajit")
console.log(typeof q1);

//number as parameter to ffunction and return type

function Addition(x,y){
    return x+y
}
let q2=Addition(5,7)
console.log(q2)

//boolean as parameter to function and object as return type

function canDrive(above18){
    if(above18){
        console.log("candrive")
        return true
    }else{
        console.log("cannot drive")
        return false
    }
}
let q4=canDrive(true)
console.log(q4)

//array as parameter to function and array return type

let marks =[35,38,45,44,56,78,90]
function above40(arr){
    let q5 =arr.filter(function(el){
        return el >40
    })
    return q5

}
let q6 =above40(marks)
console.log(q6)

//object as a parameter to function and object ast return type

let student = {
    firstName:"Ajit",
    lastName:"Gode"
}

function addCity(obj){
    obj.city = "Sangamner"
     return obj
}
let q7 =addCity(student)
console.log(q7)

let qq =10
console.log(qq)

let add = function(x,y){
    return x+y
}
console.log(add)
let q8 =add(12,5)//caling the function
console.log(q8)


let addition = function(x,y){
    return x+y
}

function add1(x,y,fn){
    let z= fn(x,y)
    return z

}
let s1 =add1(12,3,addition)
console.log(s1)

//Difference between printing definition and calling function
//console.log(addition) ---->printing function
//let x1 = addition(12,3) ---> calling function


//Function as a return type from another function

function multiplication(x,y){
    console.log(x*y)
    return function(){
        console.log('return')
    } 

}
let s2= multiplication(12,5)
console.log(s2)
s2();