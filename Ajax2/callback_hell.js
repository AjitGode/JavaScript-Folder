// call back hell with promises 

function createuser(){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve("User Create")
        }, 3000);
    })
}

function getId(){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve("get id")
        }, 2000);
    })
}

function getUserInfo(){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve("get User Info")
        }, 1000);
    })
}

// createuser()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getUserInfo()
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(){
//     console.log('error')
// })


// async await 

async function getInfo(){
    let a = await createuser()
    console.log(a)

    let b = await getId()
    console.log(b)

    let c = await getUserInfo()
    console.log(c)
}
getInfo()