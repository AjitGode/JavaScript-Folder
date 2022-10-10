

// lexical scope

// function addition(){
//     let x = 5
//     let y = 8
//     function additionB(){
//         let a = 10
//         let b= 5
//         console.log(x+y+b+a)

//         function additionC(){
//             console.log(x+y)
//         }
//         additionC()
//     }
//     additionB()
// }

// addition()


// closures 

// function mul(x,y){
//     console.log(x*y)
//     return x * y
//    // console.log("Hello") ------> After return in js any statement does not work
// }

// let a1 =mul(5,6)
// console.log(a1)


function mul(){
    let a= 5 
    let b= 5

    return function(){
        console.log(a*b)
    }
}

let a2 =mul()
console.log(a2)


function substractionP(){
    let a=40
    let b= 20

    let display = function(){
        console.log('substraction..')
    }

    let substraction = function(){
        console.log(a-b)
    }
    return [display,substraction]

}

let q1 = substractionP()
q1[0]
q1[1]


// encapsulation 
var firstName= "Amol"
var lastName = "Vetal"

// let info = {
//     firstName:"Ajit",
//     lastName:"Gode",
//     display:function(){
//         // this =====> info
//         console.log(this.firstName+ " "+this.lastName)

//         function display2(){
//             // this ====>window
//             console.log(this.firstName+ " "+this.lastName)
//         }
//         display2()
//     }
// }
//info.display()

// let info = {
//     firstName:"Ajit",
//     lastName:"Gode",
//     display:function(){
//         // this ====> info
//         console.log(this.firstName+""+this.lastName)
//         let display2 = () =>{
//             //this ====> immediate parent this keyword
//             console.log(this.firstName+""+this.lastName)
//         }
//         display2()
//     }
// }


// info.display()



// this ====>window

let info = {
    firstName:"Ajit",
    lastName:"Gode",
    display:()=>{
        // this ====> immediate parent this keyword
        console.log(this.firstName+this.lastName)
        let display2 = () =>{
            //this ====> immediate parent this keyword
            console.log(this.firstName+this.lastName)
        }
        display2()
    }
}

info.display()