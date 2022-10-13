function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
    // this.display = function(){
    //     console.log(this.firstName+" "+this.lastName)
    // }
}

let Ajit = new Person("Ajit","gode")
let Amol = new Person("Amol","Vetal")

console.log(Ajit)
// Ajit.display()


// ervey object has __proto__ and this is == Parent.prototype


console.log(Ajit.__proto__ === Person.prototype)

// Person.prototype.display = function(){
//     console.log(this.firstName+" "+this.lastName)
// }

Ajit.__proto__.display = function(){
    console.log(this.firstName+" "+this.lastName)
}


Amol.display()

Person.prototype.city = "Pune"
console.log(Ajit.city)

console.log(Ajit instanceof Person)

let q1 = Ajit.hasOwnProperty('firstName')
console.log(q1)


// Array 

let names = ["Ajit","Sanket","Amol","Suyog"]

//evry array has __proto__

console.log(names instanceof Array)

console.log(names.__proto__ == Array.prototype)


Array.prototype.Greet = function(){
    console.log("ajit")
}

names.Greet()
console.log(names)

// Es6 class

class Person2{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    display(){
        console.log(this.firstName+" "+this.lastName)
    }
}

let sanket = new Person2("Sanket","Modhe")
let suyog = new Person2("Suyog","Rahane")

console.log(sanket)
console.log(suyog)

// program 3

let Person3 = {
    init:function(fn,ln){
        this.firstName = fn
        this.lastName = ln
    },
    display:function(){
        console.log(this.firstName+" "+this.lastName)
    }
}

let Akash = Object.create(Person3)
console.log(Akash)

Akash.init("Akash","Gunjal")
console.log(Akash)

// console.log(Akash.__proto__ === Person3.prototype)