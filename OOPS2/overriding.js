// overloading -- ---  same class, same method , diff signature

// class addition{
//     add(a,b){
//         console.log(a+b)
//     }
//     add(a,b,c){
//         console.log(a+b+c)
//     }
//     add(a,b,c,d){
//         console.log(a+b+c+d)
//     }
// }

// let a = new addition()

// a.add(12,2,2,2)


class adddition{
    add(a,b,c,d){
        if(a != undefined && b != undefined && c != undefined && d != undefined ){
            console.log(a+b+c+d)
        }else if(a != undefined && b != undefined && c != undefined){
            console.log(a+b+c)
        }else if(a != undefined && b != undefined){
            console.log(a+b)
        }
    }
}

let b = new adddition()

b.add(12,3)
b.add(12,3,2)
b.add(12,3,3,3)


// overriding  ----> inheritance     same method , same signature , diff class



class worldBank{
    loan(){
        console.log('I am from loan Method WB')
    }

    save(){
        console.log('I am from save Method WB') 
    }
}


class SBI extends worldBank{
    loan(){
        console.log('I am from loan Method SBI')
        super.loan()

    }

    save(){
        console.log('I am from save Method SBI') 
        super.save()
    }
}


let abc = new SBI()

abc.loan()
abc.save()


// encapsulation

function addditionA(){
    let a = 10
    let y = 20

    return [a,y]
}

let q11 = new adddition()

console.log(q11[1])


class vehicle{
    static color = "red"
    static displaycolor = function(){
        console.log(vehicle.color)
    }
}

vehicle.displaycolor()
console.log(vehicle.color)