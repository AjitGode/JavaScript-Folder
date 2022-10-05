// Templates

// function constructor


function Person(fn,ln,rn,ag,){
    this.firstName = fn
    this.lastName = ln
    this.rollNo = rn
    this.age = ag 
    this.display = function(){
        console.log(this.firstName + " " +this.lastName)
    }

}

let Ajit = new Person("Ajit","Gode",55,23)
console.log(Ajit)

Ajit.display()


// es6 class 

class Person2{
    constructor(fn,ln,rn,ag){
        this.firstName = fn
        this.lastName = ln
        this.rollName = rn
        this.age = ag
        this.display = function(){
            console.log(this.firstName +" "+this.lastName)
        }

    }
}

let Amol = new Person2("Amol","Gode",55,23)

// object.create


let obj = {
    init:function(fn,ln,rn,ag){
        this.firstName = fn
        this.lastName = ln
        this.rollName = rn
        this.age = ag
        this.display = function(){
            console.log(this.firstName+ +this.lastName)
        }

    }
}

let sanket = Object.create(obj)
sanket.init("Sanket","Modhe",55,23)



// function constructor

function Vehicle(color,type){
    this.color = color
    this.type = type
    // this.displayColor = function(){
    //     console.log(this.color)
    // }
}

let Audi = new Vehicle("red","Sudane")
let bmw = new Vehicle("blue",'suv')
console.log(Audi)

// __proto__  ===> every object has  __proto__ inherits from Parent.Prototype

//console.log(Audi.__proto__ ===Vehicle.prototype)

Vehicle.prototype.displayColor = function(){
    console.log(this.color)
}

console.log(Audi)


// placing common things in prototype

//program 

let names = ["Ajit","Sanket","Amol"]
console.log(names)

console.log(Array.prototype=== names.__proto__)

Array.prototype.hello = function(){
    console.log("Hello i am new method")
}

names.hello()


// program 2

let animal = function(color,type){
    this.color = color
    this.type = type
}

animal.prototype.city = "pune"
animal.prototype.displayHello = function(){
    console.log('hello')
}

let tiger = new animal("orange","danger")
console.log(tiger)

tiger.displayHello()