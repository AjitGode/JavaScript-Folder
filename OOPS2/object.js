// object literal

let ajit = {
    firstName: "Ajit",
    lastName:"Gode",
    age:23,
    display:function(){
        console.log(this.firstName+ " "+this.lastName)
    }
}

ajit.display()


// function constructor

function Person(fn,ln,ag){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.display= function(){
        console.log(this.firstName+" "+this.lastName)
    }
}

let Ajit = new Person("Ajit","gode",23)
console.log(Ajit)
Ajit.display()

let Amol = new Person("Amol","Vetal",23)
Amol.display()


// program 2

function vehicle(color,type){
    this.color = color
    this.type= type
    this.display = function(){
        console.log(this.color)
    }
}

let Audi = new vehicle("Black","sudane")

console.log(Audi)
Audi.display()

// Es6 class

// program 3

class person2 {
    constructor(fn,ln,ag){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.display=function(){
            console.log(this.firstName+""+this.lastName)
        }
    }
}

let Sanket = new person2("Sanket","Modhe",24)

console.log(Sanket)

class vehicle1{
    constructor(color,type){
        this.color= color
        this.type = type
        this.display = function(){
            console.log(this.color)
        }
    }
}

let bmw = new vehicle1("red","sudane")

console.log(bmw.color)


// Object.create method

let obj = {
    init:function(fn,ln,ag){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.display = function(){
            console.log(this.firstName+""+this.lastName)
        }
    }
}

let Ajit2 = Object.create(obj)

Ajit2.init("Ajit","Gode",23)
Ajit2.display()
console.log(Ajit2)