

// program 1

// function Person(fn,ln){
//     this.firstName =fn
//     this.lastName =ln
//     this.display = function(){
//         console.log(this.firstName+ " "+this.lastName)
//     }
// }

// let Ajit = new Person("Ajit","Gode")

// let Sanket = new Person("Sanket","Modhe")

// console.log(Ajit)

// program 2

function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
}

let Ajit = new Person("Ajit","Gode")
let Amol = new Person("Amol","Vetal")

Person.prototype.display = function(){
    console.log(this.firstName+""+this.lastName)
}

console.log(Ajit)
Ajit.display()

// every object__proto__ == Parent.prototype
console.log(Ajit.__proto__===Person.prototype)

Amol.display()