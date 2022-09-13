let a = 20
let b = 4

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

let s = 55
let t = 5

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

/**************/

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(100,50)
Calculator(90,45)


// basic function components 
function add(){
    console.log(9+9)
}
add()
add()
add()

function addition(x,y){
    console.log(x+y)
}
addition(12,6)
addition(120,60)
addition(1200,600)

function addtionC(x,y){
    return x + y
}
let r = addtionC(10,5)
console.log(r)
console.log(r+r)
console.log(r-5)

// -----------------------------------------

// 3 different ways to write function in js

// function declaration 

function add(x,y){
    return x + y
}
let a1 = add(12,3)
console.log(a1)


// function expression 

let addB = function(x,y){
    return x + y
}
let a2 = addB(12,3)
console.log(a2)



// arrow

let addC = (x,y)=>{
    return x + y
}
let a4 = addC(12,3)
console.log(a4)

// different ways of writing  in js


let sub = function(x,y){
    return x - y
}
let a11 = sub(12,4)
console.log(a11)

function subB(q,w){
    return q -w
}
let a22  = subB()
console.log(a22)


let subV = (e,r)=>{
    return e - r
}
let q22 = subV(12,6)
console.log(q22)