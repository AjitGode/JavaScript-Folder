let str = ",('a'),and{a}"
let output = ""

for(let i=0;i<str.length;i++){
    if(str[i]==="(" || str[i]===")" || str[i]==="{" || str[i]==="}")
    output+=str[i]
}

console.log(output)