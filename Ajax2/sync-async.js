// sync ------blocking in nature

//A-----5 sec
//B-----3 sec
//C-----1 sec

//c----
//B----
//A----


function additionA() {
    console.log('A')
}

function additionB() {
    console.log('B')
}
// additionB()
// additionA()


function additionC() {
    setTimeout(() => {
        console.log('C')
    }, 3000)
}

function additionD() {
    console.log('D')
}

// additionC()
// additionD()


// program 

//Facebook -----User Create, login via Id, fill userinfo


// asyn call excute sync

// function Facebook(){
//     setTimeout(() => {
//         console.log('User Created')
//     }, 3000);

//     setTimeout(() => {
//         console.log('Login via Id')
//     }, 2000);

//     setTimeout(() => {
//         console.log('Fill User Info')
//     }, 1000);
// }

// Facebook()

//call back hell 

// asyc call ecute sync

function Facebook() {
    setTimeout(() => {
        console.log('User Created')
        setTimeout(() => {
            console.log('Login via Id')
            setTimeout(() => {
                console.log('Fill User Info')
            }, 1000);
        }, 2000);
    }, 3000);
}

// Facebook()

// Es6 promises 

// promises  ----- > pending, resolve , reject  (status)


let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 10

    if(a == b){
        resolve('Hello')
    }
    else{
        reject("Bye")
    }
})

// consume promises

pro.then(function(str){
   console.log(str)
},function(str){
    console.log(str)
})


let pro2 = new Promise(function(resolev,reject){
    let x = 200
    let y = 200

    if(x==y){
        resolev([1,2,3])
    }
    else{
        reject([-1,-2,-3])
    }
})

pro2.then(function(a){
    console.log(a[0])

},function(a){
    console.log(a[0])

})