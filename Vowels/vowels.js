
let fullName = "Ajit Govind Gode"

let str = fullName.toLowerCase()
let a = 0
let i = 0
let e = 0
let o = 0
let u = 0


for (let i = 0; i < str.length; i++) {
    let v = str[i]

    if (v === 'a') {
        a = a + 1
    } else if (v === 'i') {
        i = i + 1
    } else if (v === 'e') {
        e = e + 1
    } else if (v === 'o') {
        o = o + 1
    } else if (v === 'u') {
        u = u + 1
    }
}
console.log(a)
// console.log(i)
// console.log(e)
// console.log(o)
// console.log(u)


// anathor way to find vowels count 
let name1 = "Ajit Gode"
let str2 = name1.toLowerCase()

let count = 0;

for (let i = 0; i < str2.length; i++) {
    let s = str2[i]

    if (s == 'a') {
        count = count + 1
    } else if (s == 'e') {
        count = count + 1
    } else if (s == 'i') {
        count = count + 1

    } else if (s == 'o') {
        count = count + 1
    } else if (s == 'u') {
        count = count + 1
    }
}

console.log(count)

// another simple method to find out vowels count


let name3 ="Hello world"

let str3 = name3.toLowerCase()

let count1 = 0;

for(let i=0;i<str3.length;i++){
    let c = str3[i]

    if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u'){
        count1 ++;
    }
}

console.log(count1)
