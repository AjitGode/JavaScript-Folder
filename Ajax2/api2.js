
function getPagewiseUser(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        //  res.data.forEach(el => {
        //     renderHtml(el)
        // });
        
      return res
      
    })
}



function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        // console.log(res.data)
         return res
    })
}
// getPagewiseUser(2)
// .then(function(res){
//     let id= res.data[1].id
//     return id
//     // console.log(id)
// })
// .then(function(res){
//     let r = getSingleUser(res)
//     return r
// })
// .then(function(res){
//     let a = res.data
//     // console.log(a)
//     renderHtml(a)
// })

async function getInfo(pageNumber){
     let res = await getPagewiseUser(pageNumber)
     let id = res.data[3].id
     let user = await getSingleUser(id)
     renderHtml(user.data)
}
getInfo(2)

function renderHtml(obj){
    document.write(`<h1>First Name:~ ${obj.first_name}</h1>`)
    document.write(`<h1>Last Name:~ ${obj.last_name}</h1>`)
    document.write(`<h1>Email:~ ${obj.email}</h1>`)
    document.write(`<h1>ID:~ ${obj.id}</h1>`)
    document.write(`<img src=${obj.avatar}>`)
}


