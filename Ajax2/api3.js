

function getPagewiseUser(pageNumber){
        return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function(res){
            return res.json()
        })
        .then(function(res){
            return res
            // console.log(res.data)
        })
}


function getUserId(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        // let a = res.data[0].id
        // console.log(a)
        return res
    })
}

getPagewiseUser(2)
.then(function(res){
    console.log(res.data[0].id)
    let id = res.data[1].id
    return getUserId(id)
})
.then(function(res){
    //  console.log(res.data)
    // let a = res.data
    renderHtml(res.data)
})


function renderHtml(obj){
    document.write(`<h1>${obj.first_name}</h1>`)
    document.write(`<h1>${obj.last_name}</h1>`)
    document.write(`<h1>${obj.email}</h1>`)
    document.write(`<h1>${obj.id}</h1>`)
    document.write(`<img src=${obj.avatar}>`)
}