

// polymorphism --- 

// poly ---->  Many
//Morphisma ----> Form


// overloading --- same class,same method,diff signature


// class Addition {
//     add(x,y){
//         console.log(x+y)
//     }

//     add(x,y,z){
//         console.log(x+y+z)
//     }

//     add(x,y,z,s){
//         console.log(x+y+z+s)
//     }
// }

// let a = new Addition()

// a.add(12,2)
// a.add(12,2,2,2)

class Addition {
    add(a,b,c,d){
        if(a!=undefined && b!==undefined && c!=undefined && d!==undefined){
            console.log(a+b+c+d)
        }else if(a!=undefined && b!==undefined && c!=undefined){
            console.log(a+b+c)
        }else if(a!=undefined && b!==undefined){
            console.log(a+b)
        }
    }
}


let aa = new Addition()

aa.add(12,2)
aa.add(12,2,2,2)


// overriding 
 // Different class , same method , same signature


 class WorldBank{
    loan(){
        console.log('i am loan from WB')
    }
    save(){
        console.log('i am save from WB')
    }
 }


 class SBI extends WorldBank{
    loan(){
        console.log('i am loan from SBI')
        super.loan()
    }
    save(){
        console.log('i am save from SBI')
        super.save()
    }
 }

 let Pune = new SBI()

 Pune.loan()


 // static keyword

 class Person{
    static country = "India" 

    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln

    }
    displayInfo(){
        console.log(this.firstName+ " "+this.lastName)
    }

    static displayCountry(){
        console.log(Person.country)
    }
 }

 console.log(Person.country)
 Person.displayCountry()

 // encapsulation  

 class PersonB {
    constructor(firstName,lastName){
        let fn = firstName
        let ln = lastName

        this.display = function(){
            console.log(fn +" "+ln)
        }
    }
 }

 let q1 = new PersonB("Ajit","Gode")

 q1.display()
 console.log(q1.fn)