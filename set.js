// array , object ,string , set , map 

//userdefined , set

// set  ----- 

//set does not store the value by index
//set does not allow duplicate value


let names = ["Ajit","Sanket","Suyog","Amol"]

let setA = new Set()
console.log(setA)


// javascript  --- object --- property and method
// method has action and return

// set property

// 1. add() 

setA.add('ajit')
setA.add('sanket')
setA.add('amol')

console.log(setA)

// 2. size()
console.log(setA.size)

// 3. has()

let q1 = setA.has('ajit')
console.log(q1)

// 4. delete

let q2 = setA.delete('amol')
console.log(q2)

// 5. clear()

setA.clear()
console.log(setA)

// 6. forEach() 

let setB = new Set(["pune","sangamner","nashik","dhule"])
console.log(setB)

setB.forEach(function(el){
    console.log(el)
})


// object -- ecma script 6

let info = {
    firstName:"Ajit",
    lastName:"Gode",
    age:23
}

for(let key in  info){
    console.log(key,info[key])
}

for(let k of Object.keys(info)){
     console.log(k)
}

for(let y of Object.values(info)){
    console.log(y)
}

for(let [a,b] of Object.entries(info)){
    console.log(a,b)
}

