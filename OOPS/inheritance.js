// class GrandFather{
//     firstName="Shankar"
//     lastName="Gode"
//     displayGname(){
//         console.log(this.firstName+" "+this.lastName)
//     }
// }


// class Father extends GrandFather{
//     FfirstName="Govind"
//     displayFname(){
//         console.log(this.FfirstName+ " "+this.firstName+" "+this.lastName)
//     }
// }


// class Son extends Father{
//     sName="Ajit"
//     displaySname(){
//         console.log(this.sName+" "+this.FfirstName+" "+this.lastName)
//     }
// }

// let Ajit = new Son()

// console.log(Ajit.firstName)
// console.log(Ajit.lastName)
// console.log(Ajit.FfirstName)
// Ajit.displayGname()
// Ajit.displayFname()
// Ajit.displaySname()


// program 2 --- using constructor

// class GFather {
//     constructor(firstName,lastName){
//         this.firstName = firstName,
//         this.lastName = lastName
//     }
//     displayGname(){
//         console.log(this.firstName+ " "+this.lastName)
//     }
// }

// class Father extends GFather{
   
// }

// let Ajit = new Father("Govind","Gode")
// console.log(Ajit.firstName)
// console.log(Ajit.lastName)


// program 3 -- using two constructor

// class Gfather {
//     constructor(GfaName,GlastName){
//         this.firstName= GfaName,
//         this.lastName = GlastName
//     }
//    displayGname(){
//     console.log(this.firstName+ " "+this.lastName)
//    }
// }

// class Father extends Gfather{
//     constructor(firstName,lastName,Fname){
//         super(firstName,lastName)
//         this.Fname = Fname
//     }
//     displayFname(){
//         console.log(this.Fname+" "+this.firstName+" "+this.lastName)
//     }
// }

// class Son extends Father{
//     constructor(firstName,lastName,Fname,Sname){
//     super(firstName,lastName,Fname)
//     this.Sname= Sname
//     }
//     displaySname(){
//         console.log(this.Sname+" "+this.Fname+" "+this.lastName)
//     }
// }

// let Govind = new Father("Shankar","Gode","Govind")
// Govind.displayFname()

// let Ajit = new Son("Shankar","Gode","Govind","Ajit")
// Ajit.displaySname()


// program 4 --- one parent two child

class FatherA {
    constructor(fn,ln){
        this.firstName=fn;
        this.lastName = ln;

    }
    displayFname(){
        console.log(this.firstName+" "+this.lastName)
    }
}

class SonA extends FatherA{
    constructor(firstName,lastName,sName){
        super(firstName,lastName)
        this.sName = sName
    }

    displaySname(){
        console.log(this.sName+" "+this.firstName+" "+this.lastName)
    }
}

class DaughterA extends FatherA{
    constructor(firstName,lastName,Dname){
        super(firstName,lastName)
        this.Dname =Dname
    }
    displayDname(){
        console.log(this.Dname+" "+this.firstName+" "+this.lastName)
    }
}

let Ajit = new SonA("Govind","Gode","Ajit")
Ajit.displaySname()
Ajit.displayFname()

let srutika = new DaughterA("Daulat","Gode","Shrutika")

srutika.displayDname()
