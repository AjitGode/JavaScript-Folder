
// length ---- property -----> number
let city = "Sangamner"
let a1 = city.length
console.log(a1)   // output --9 
console.log(typeof a1) // number



let country = "India"
let a2 = country.toUpperCase() 
console.log(a2) // INDIA
console.log(typeof a2) // string



let a3 = country.toLowerCase()
console.log(a3)// india
console.log(typeof a3)// string



let fruit = "Apple"
let a4 = fruit.includes('pp')
console.log(a4) // true
console.log(typeof a4) //boolean

let a5 = fruit.includes('ple')
console.log(a5) // true
console.log(typeof a5) // boolean 

// startsWith()


let vegetable = "brinjal"
let a6 = vegetable.startsWith('B')
console.log(a6) // false
console.log(typeof a6) //boolean

let a7 = vegetable.startsWith('brin')
console.log(a7) // true
console.log(typeof a7) //boolean


