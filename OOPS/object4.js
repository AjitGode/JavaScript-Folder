// program 4 


function Vehicle (color,type){
    this.color = color
    this.type = type
    // this.display = function (){
    //     console.log(this.color)
    // }

}

let Audi = new Vehicle("blue","sudane")
let bmw = new Vehicle("red","suv")


// console.log(Audi)
// console.log(bmw)

Vehicle.prototype.display = function (){
    console.log(this.color);
}

Audi.display()
bmw.display()

// program 2

//es6 class


class Person{
    constructor(color,type){
        this.color= color;
        this.type = type
        // this.display = function(){
        //     console.log(this.color)
        // }
    }
}

let Audi1 = new Person("black","suv")
let BMW = new Person("blue","sudane")

console.log(Audi1)
console.log(BMW)

console.log(Person.prototype ===Audi1.__proto__)

Audi1.__proto__.display = function(){
    this.color
}

Audi1.display()

// program 3

// method attached with out of constructor
class Vehicle1 {
    constructor(color,type){
        this.color = color;
        this.type = type
    }
    display(){
        console.log(this.color)
    }
}

let audi = new Vehicle1("black","suv")
let bmw1 = new Vehicle1("blue","sudane")

console.log(audi)

audi.display()

// program 4
// // setting the value using method

class Person1{
   
      setFullName(fn){
        this.fullName = fn
      }

      getFullName(){
        return this.fullName
      }

      setAge(ag){
        this.age = ag
      }
      getAge(){
        return this.age
      }

}

let ram = new Person1()
ram.setFullName("Ajit Gode")

console.log(ram)
console.log(ram.setFullName)

//program 5
// set get keyword


class Person3{
    set fn(word){
          this.fullName = word
    }
    get fn(){
        return this.fullName
    }
    set ag(a){
        this.age = a
    }
    get ag(){
        return this.age
    }
}

let ram1 = new Person3()

ram1.fn = "Ajit Gode"
console.log(ram1)

ram1.ag = 23
console.log(ram1.ag)
