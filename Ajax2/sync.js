// sync --- Blocking in nature 

function A(){
    console.log("A")
}

function B(){
    console.log("B")
}

// B()
// A()


// async -- Non Blocking in nature

function C(){
   console.log("C")
}

function D(){
    setTimeout(() => {
        console.log("D")
    },3000);
}
// D()
// C()




// function Facebook(){
// setTimeout(() => {
//        console.log("User Created") 
// }, 3000);

// setTimeout(() => {
//     console.log("LogIn via Id")
// }, 2000);

// setTimeout(() => {
//     console.log("Home page")
// }, 1000);
// }

// Facebook()


// call back hell

function Facebook(){
    setTimeout(() => {
        console.log("User Created")
        setTimeout(() => {
            console.log("LogIn Via Id")
            setTimeout(() => {
                console.log("Home Page")
            }, 1000);
        }, 2000);
        
    }, 3000);
}

// Facebook()


//Promises -- Pending , resolve , reject 


let Pro = new Promise(function(resolev,reject){
    let a = 10
    let b= 10

    if(a==b){
        resolev("Hii")
    }
    else{
        reject("Bye")
    }
})

// consuming the promises 

Pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})


let Pro2 = new Promise(function(resolve,reject){
    let x = 100
    let y = 100

    if(x==y){
        resolve("Hello")
    }
    else{
        reject("Bye")
    }
})

Pro2.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})

let pro3 = new Promise(function(resolev,reject){
    // let A = 10
    // let B = 20

    // if(A==B){
    //     setTimeout(function(){
    //         resolev("AG")
    //     },2000)
    // }else{
    //     setTimeout(function(){
    //         reject("AS")
    //     },5000)
    // }

    console.log("Ag")
    resolev()
    reject()
})


pro3.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})
