

// api -- hit -- listOfusers

//single user--- id

//next api -- id ---userinfo

//render to html

function GetUserPageWise(page){
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        return res
    })
}

function getSingleUserInfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
       return res 
    })
}

GetUserPageWise(2)
.then(function(res){
    let id = res.data[0]['id']
    return id
})
.then(function(i){
    return getSingleUserInfo(i)
})
.then(function(res){
    console.log(res.data)
})