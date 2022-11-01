let b ={
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

// console.log(b.data[1].email)

function getUser(pageNumber){
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(res){
        return res.json()
    })
    .catch(function(a){
        console.log(a)
    })
    .then(function(res){
        res.data.forEach(el => {
            renderHtml(el)
            
        });
    })
}
getUser(2)

function renderHtml(obj){
    document.write(`<h1>${obj.first_name}</h1>`)
    document.write(`<h1>${obj.last_name}</h1>`)
    document.write(`<h1>${obj.id}</h1>`)
    document.write(`<h1>${obj.email}</h1>`)
    document.write(`<img src = ${obj.avatar}>`)
}