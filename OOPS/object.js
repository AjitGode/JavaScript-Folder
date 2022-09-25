// type -------- property and method
//values


//template -------> objects
//object literals
//function constructor
// es6 class
// object create method



// template ---- first class

// encapsulation
//inheritance 
//polymarphism
//abstraction



// program 1 (Object literal)



let Ajit ={
    firstName:"Ajit",
    lastName:"Gode",
    age:23,
    skill:["HTML","CSS","JAVASCRIPT","ANGULAR"],
    display:function(){
       console.log(this.firstName+ "" +this.lastName)
    }
}
Ajit.display();


// template -----> function constructor

//program 1

function Person(fn,ln,ag,skill){
    this.firstName= fn;
    this.lastName=ln;
    this.age=ag;
    this.skill=skill;
    this.display = function(){
        console.log(this.firstName + " "+this.lastName)
    }
}

let Ajit2 = new Person('Ajit','Gode',23,["HTML","CSS","JAVaSCRIPT"]);
console.log(Ajit2)
Ajit2.display()


//program 2

function Vehicle(color,type,model_No){
    this.color = color;
    this.type = type;
    this.model_No= model_No;
    this.start = function (){
        console.log('I am Starting')

    }
    this.stop = function (){
        console.log('I am Stop')
    }

}

let Audi = new Vehicle('Blue','Sudane',2543)
console.log(Audi)
Audi.start()
Audi.stop()


// ES6 class


class PersonB{
    constructor(fn,ln,ag,skill){
        this.firstName = fn;
        this.lastName = ln;
        this.age = ag;
        this.skill = skill;
        this.display = function(){
            console.log(this.firstName + " "+this.lastName)
        }

    }
}

let Ajit3 = new PersonB('Ajit','Gode',23,["html","css","javascript"])
console.log(Ajit3)
Ajit3.display()

let number = [2,3,4,5,6,7,8,9]
let names= ["Ajit","Sanket","Amol"]

let persons1 = [
    new PersonB('Ajit','Gode',23,["javascript","Angular"]),
    new PersonB('Amol','Vetal',23,["javascript","Salsforce"]),
    new PersonB('Sanket','Modhe',24,["javascript","Outsystem"]),
    new PersonB('Suyog','Rahane',23,["javascript","Java"])
]

persons1.forEach(function(el){
    for(let key in el){
        console.log(key,el[key])
    }
})

let persons2 = [
    new PersonB('Ajit','Gode',23,["javascript","Angular"]),
    new PersonB('Amol','Vetal',23,["javascript","Salsforce"]),
    new PersonB('Sanket','Modhe',24,["javascript","Outsystem"]),
    new PersonB('Suyog','Rahane',23,["javascript","Java"])
]

for(let values of Object.values(persons2)){
    for(let key in values){
        console.log(key,values[key])
    }
}

