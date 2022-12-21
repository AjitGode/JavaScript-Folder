
let fullName = "Ajit Govind Gode"

let str = fullName.toLowerCase()
let a=0
let i=0
let e=0
let o=0
let u=0


for(let i=0;i<str.length;i++){
    let v=str[i]

    if(v==='a'){
        a=a+1
    }else if(v==='i'){
        i=i+1
    }else if(v==='e'){
        e=e+1
    }else if(v==='o'){
        o=o+1
    }else if(v==='u'){
        u=u+1
    }
}
console.log(a)
// console.log(i)
// console.log(e)
// console.log(o)
// console.log(u)