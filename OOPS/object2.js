// Type - properties and methods
// type -- object -- properties and method


let Ajit = {

    firstName:"Ajit",
    lastName:"Gode",
    age:23,
    rollNo:55,
    display:function(){
        console.log(this.firstName + " "+this.lastName)
    }
}

Ajit.display()

let Sanket = {

    firstName:"Sanket",
    lastName:"Modhe",
    age:23,
    rollNo:55,
    display:function(){
        console.log(this.firstName + " "+this.lastName)
    }
}

Sanket.display()

// program 2

// template --- object

// 1. function constructor

function Person(fn,ln,ag,rn){
    this.firstName = fn;
    this.lastName = ln;
    this.age =ag;
    this.rollNo = rn;
    this.display = function(){
        console.log(this.firstName+ " "+this.lastName)
    }


}

let ajit = new Person("Ajit","Gode",23,88)
console.log(ajit)

ajit.display()

let sanket = new Person("Sanket","Modhe",24,66)
console.log(sanket)

ajit.city = "Pune"

console.log(ajit)


// ex 2

let Vehicle = function(color,type){
    this.color = color
    this.type = type
    this.display = function(){
        console.log(this.color)
    }
}

let audi = new Vehicle('red','suuv')
console.log(audi)

// 2. es6 class


class Person2{
    constructor(fn,ln,ag,rn){
        this.firstName =fn;
        this.lastName = ln;
        this.age = ag;
        this.rollNo =rn;
        this.display = function(){
            console.log(this.firstName+ ""+this.lastName)
        }

    }
}

let ajit2 = new Person2("Ajit","Gode",23,56)
console.log(ajit2)


// using variable

let Person3 = class{
    constructor(fn,ln,ag,rn){
        this.firstName =fn;
        this.lastName = ln;
        this.age = ag;
        this.rollNo =rn;
        this.display = function(){
            console.log(this.firstName+ ""+this.lastName)
        }

    }

}

let sanket2= new Person3("Sanket","Modhe",24,66)
console.log(sanket2)

// 3. Object.Create()

let obj = {
    init:function(fn,ln,rollNo,age){
        this.firstName =fn;
        this.lastName =ln;
        this.age = age;
        this.rollNo = rollNo
    }
}

let amol = Object.create(obj)
amol.init("Amol","vetal",55,23)
console.log(amol)