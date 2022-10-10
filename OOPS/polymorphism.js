

class vehicle{
    constructor(wheel){
        this.wheel = wheel
    }
    start(){
        console.log("I am starting...")
    }
    stop(){
        console.log("I am stoping the vehicle")
    }
}

class TwoWheeler extends vehicle{
    constructor(wheel,mirror){
        super(wheel)
        this.mirror= mirror
    }
}

let activa = new TwoWheeler(2,2)

console.log(activa.wheel)
console.log(activa.mirror)

activa.start()
activa.stop()

let scooty = new TwoWheeler(3)
console.log(scooty.wheel)

let audi = new vehicle(4)
console.log(audi.wheel)
audi.start()


// plymorphism ----overloading 

// class Addition{
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

// a.add(12,13,12,34)


class Addition{
    add(a,b,c,d){
        if(a!== undefined && b!==undefined && c!==undefined && d!==undefined ){
            console.log(a+b+c+d)
        }
        else if(a!== undefined && b!==undefined && c!==undefined){
            console.log(a+b+c)
        }
        else if(a!== undefined && b!==undefined){
            console.log(a+b)
        }
    }
}

let a = new Addition()

a.add(12,12)
a.add(12,12,13)
a.add(12,12,12,14)



// overriding 
// ---- inheritance 
// difference class, same method, same signature


class worldBank{
    loan(){
        console.log('the loan percentage will be 12')
    }
    save(){
        console.log('the save percentage will be 6')
    }
}

class SBI extends worldBank{
    loan(){
        console.log('the loan percentage will be 7 sbi')
    }
    save(){
        console.log('the loan percentage will be 3 sbi')
    }
}

class PNB extends worldBank{
    loan(){
        console.log('the percentage will be 2 pnb')
    }
    save(){
        console.log('the percentage will be 1 pnb')
    }
}

let pune = new SBI()

pune.loan()
pune.save()

let sangamner = new PNB()

sangamner.loan()
sangamner.save()