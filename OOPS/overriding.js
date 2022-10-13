// over loading and overriding

//overloading  --- same class method,different signature
//overriding -- different class,same method and same signature


class Addition{
    add(a,b,c,d){
        if(a!=undefined && b!=undefined && c!=undefined && d!=undefined){
            console.log(a+b+c+d)
        }
        if(a!=undefined && b!=undefined && c!=undefined){
            console.log(a+b+c)
        }
        if(a!=undefined && b!=undefined){
            console.log(a+b)
        }
    }
}

let a = new Addition()
// a.add(12,12)
// a.add(12,12,13)
// a.add(12,12,11,45)
a.add(12)

// overriding

class WorldBank{
    save(){
        console.log("I am from save method WB")
    }
    loan(){
        console.log("I am from loan method Wb")
    }
}

class SBI extends WorldBank{
    save(){
        console.log("I am from save method sbi")
        super.save()
    }
    loan(){
        console.log("I am from loan method sbi")
        super.loan()
    }
}

class PNB extends WorldBank{
    save(){
        console.log("I am from save method pnb")
    }
    loan(){
        console.log("I am from loan method pnb")
    }
}

let q1 = new SBI()
q1.save()
q1.loan()

// encapsulation 

function addition(){
    let x = 10
    let y= 20
    return [x,y]
}

let q11 = addition()
console.log(q11[0])

class Vehicle{
    static color = "red"
    static displayColor = function(){
        console.log(Vehicle.color)
    }
}

Vehicle.displayColor()

console.log(Vehicle.color)