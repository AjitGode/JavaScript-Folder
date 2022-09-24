//Undefined data type (new)

//set map

//program 1 (object literal)

let ajit ={
    firstName:"Ajit",
    lastName:"Gode",
    age:23,
    skill:["Angular","javascript","typescript"]
}

let sanket ={
    firstName:"Sanket",
    lastName:"Modhe",
    age:23,
    skill:["Java","C","C++"]
}

// Templete --- Blue print
//user defined data  ---class


//program -- setting the value outside the class

class Person {
    firstName;
    lastName;
    age;
    skill;
}

let ajit2 = new Person()
let sanket2 = new Person()

console.log(ajit2);
ajit2.firstName='vaibhav';
ajit2.lastName="Gode";
ajit2.age=23;
ajit2.skill=["Angular","javascript","typescript"]
console.log(ajit2)

class Person2 {
    constructor(fn,ln,ag,skill){
        this.firstName =fn
        this.lastName =ln
        this.age=ag
        this.skill =skill

    }
}

let Ajit = new Person2("Ajit","Gode",23,["Angular","javascript"])
console.log(Ajit);
Ajit.city="pune";
console.log(Ajit)

//program 3 (by using method)

class Person3{
    setfirstName(fn){
        this.firstName =fn;
    }
    setlastName(ln){
        this.lastName= ln
    }
    setAge(ag){
        this.age = ag
    }
}

let Ajit2 = new Person3()
Ajit2.setfirstName("Ajit")
Ajit2.setlastName("Gode")
Ajit2.setAge(23)
console.log(Ajit2)


// program -- object 
// program 2 -- class with out constructor (set the object property values)
// program 3 -- using constructor (setting the values at the time of object creation)
// program 4 -- using setmethod to set values