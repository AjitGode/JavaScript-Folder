// multilevel inheritance 


class Gfather {
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    display(){
        console.log(this.firstName+ " "+this.lastName)
    }
}

class father extends Gfather{
    constructor(firstName,lastName,fName){
        super(firstName,lastName)
        this.fName = fName
    }
    displayFather(){
        console.log(this.fName+ " "+this.lastName)
    }
}

class son extends father{
     constructor(firstName,lastName,fName,sName){
        super(firstName,lastName,fName)
        this.sName =sName
     }
     displaySon(){
        console.log(this.sName+" "+this.fName+ " "+this.lastName)
     }
}

let ajit = new son("Shankar","Gode","Govind","Ajit")

console.log(ajit.firstName)

ajit.displaySon()


// single level inheritance


class Mother{
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    displayMother(){
        console.log(this.firstName+" "+this.lastName)
    }
}

class Son extends Mother{
    constructor(firstName,lastName,sName){
        super(firstName,lastName)
        this.sName = sName
    }

    displaySon(){
        console.log(this.sName+" "+this.lastName)
    }
}

class Daughter extends Mother{
    constructor(firstName,lastName,Dname){
        super(firstName,lastName)
        this.Dname = Dname
    }
    displayDaughter(){
        console.log(this.Dname+ " "+this.lastName)
    }
}

let sanket = new Son("Manisha","Modhe","Sanket")

sanket.displaySon();

let srutika = new Daughter("Pramila","Gode","Srutika")

srutika.displayDaughter()