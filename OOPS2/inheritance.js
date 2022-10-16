

// class student{
//     firstName = 'Ajit'
//     lastName = 'Gode'
//     age = 23

//     display(){
//         console.log(this.firstName + " "+this.lastName)
//     }
// }

// class Teacher extends student{
//     salary = 30000

//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// class Professor extends Teacher{
//     specialization = "English"

//     displaySpecialization(){
//         console.log(this.specialization)
//     }
// }


// let Ajit = new Professor()

// console.log(Ajit.firstName)
// console.log(Ajit.lastName)
// console.log(Ajit.age)
// Ajit.display()



// program 2 

// class Student1{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }
//     display(){
//         console.log(this.firstName+" "+this.lastName)
//     }
// }

// class Teacher extends Student1{

// }

// let amol = new Teacher("Amol","vetal",23)

// console.log(amol)


// program 3

class student{
    constructor(fn,ln,ag){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    }
    display(){
        console.log(this.firstName + this.lastName)
    }
}


class Teacher extends student{
    constructor(firstName,lastName,age,salary){
        super(firstName,lastName,age)
        this.salary = salary
    }
    displaySalary(){
        console.log(this.salary)
    }
}

class Professor extends Teacher{
    constructor(firstName,lastName,age,salary,spl){
    super(firstName,lastName,age,salary)
    this.specialization = spl
}
displaySpecialization(){
    console.log(this.specialization)
}
}

let abc = new Professor("amol","vetal",23,30000,"english")

console.log(abc.firstName)
console.log(abc.lastName)
console.log(abc.specialization)

abc.display()
abc.displaySalary()
abc.displaySpecialization()