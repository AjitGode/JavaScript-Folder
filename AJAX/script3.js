

// sync ---- block in nature


function addition(){
    console.log('A')
}

function additionB(){
    console.log('B')
}
// additionB()
// addition()



// async ---- non blocking in nature

function additionC(){
    setTimeout(function(){
        console.log('C')
    },2000)
}

function additionD(){
    console.log('D')
}

// additionC()
// additionD()


// Multiple async 

// function GetInfo(){
//     setTimeout(function(){
//         console.log('User Create')
//     },3000)

//     setTimeout(function(){
//         console.log('Get Id')
//     },2000)

//     setTimeout(function(){
//         console.log('Get Info')
//     },1000)
// }

// GetInfo()

// call back hell

// function GetInfo(){
//     setTimeout(function(){
//         console.log('User Create')
//         setTimeout(function(){
//             console.log('Get Id')
//             setTimeout(() => {
//                 console.log('Get Info')
//             }, 1000);
//         },2000)
//     },3000)
// }

// GetInfo()

// promises 

// let pro = new Promise(function(resolve,reject){
//     let a = 30
//     let b =20

//     if(a < b){
//         resolve('A is small')
//     }else{
//         reject('A is Big')
//     }
// })

// pro.then(function(str){
//     console.log(str)
// }).catch(function(str){
//     console.log(str)
// }).finally(function(){
//     console.log('I always work')
// })

function CreateUser(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve('User create')
        },3000)
    })
}

function GetId(){
    return new Promise(function(resolve){
        setTimeout(() => {
            console.log('Get Id')
        }, 2000);
    })
}

function GetInfo(){
    return new Promise(function(resolve){
        setTimeout(() => {
            console.log('Get Info')
        }, 1000);
    })
}

// CreateUser().then(function(str){
//     console.log(str)
//     return GetId()
// })
// .then(function(str){
//     console.log(str)
//     return GetInfo()
// })
// .then(function(str){
//     console.log(str)
// })


// async await

async function getInformation(){
    let a = await CreateUser()
    console.log(a)

    let b = await GetId()
    console.log(b)

    let c = await GetInfo()
    console.log(c)
}

// getInformation()

let s = getInformation()

s.then(function(str){
    console.log(str)
})