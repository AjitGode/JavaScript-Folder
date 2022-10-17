// creating oject ways


// object literals
//function  constructor
//es6 
// object.create method

// evry object has __prot__ == Parent.prototype

class Person{
    firstName="Ajit"
    lastName= "Gode"
    age = 23

    display(){
        console.log(this.firstName+" "+this.lastName)
    }
}

let ajit = new Person()
let amol = new Person()

console.log(ajit.firstName)


// update 

ajit.firstName = "Sanket"
ajit['lastName'] = "Modhe"
ajit.age = 24

console.log(ajit)
console.log(amol)


// Es6 class using constructor 

class PersonB{
    constructor(fn,ln,ag){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag 
        
    }
    display(){
        console.log(this.firstName+" "+this.lastName)
    }
}

let Ajit2 = new PersonB("Ajit","Gode",23)
let Sanket = new PersonB("Sanket","Modhe",24)

console.log(Ajit2)
console.log(Sanket)

// using get() set() function 

// class PersonC{
//     setAge(ag){
//         this.age = ag
//     }
//     setfirstName(fn){
//         this.firstName = fn
//     }
//     setlastName(ln){
//         this.lastName = ln
//     }

//     getAge(){
//         return this.age
//     }
//     getfirstName(){
//         return this.firstName
//     }
//     getlastName(){
//         return this.lastName
//     }
// }

// let suyog = new PersonC()
// console.log(suyog)

// suyog.setAge(23)
// suyog.setfirstName('Suyog')
// suyog.setlastName('Rahane')

// console.log(suyog)

// suyog.getAge()
// suyog.getfirstName()
// suyog.getlastName()


// using set and get keyword

let Person5 = class{
    set age(ag){
        this.age = ag
    }
    set setfirtsName(fn){
        this.firstName = fn
    }
    set setlastName(ln){
        this.lastName = ln
    }

    get age(){
        return this.age
    }
    get firstName(){
        return this.firstName
    }
    get lastName(){
        return this.lastName
    }
}

let akash = new Person5()

console.log(akash)

// akash.setfirtsName = "Akash"
// akash.setlastName = "Gunjal"
// akash.age = 23

// console.log(akash)