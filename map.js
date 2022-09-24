

// map ---->

// basic difference between map and object
//object property are only string 
// but map can have any other datatype as property


let a1 = new Map()
console.log(a1)

// set
a1.set(1,'Ajit')
a1.set('fullname','Ajit gode')
a1.set(true,'IsMarried')

console.log(a1)

//size(prop,val) 
console.log(a1.size)

//get 
let q1 =a1.get(1)
console.log(q1)

//delete

a1.delete(1)
console.log(a1)

//clear()

a1.clear()
console.log(a1)

// -----------------------------------------

let mapB = new Map([
    ['patato',50],
    ['tamato',40],
    ['onion',30],
    
])

console.log(mapB)


let setC = new Set()
setC.add(22)
setC.add(33)

for(let val of setC.keys()){
    console.log(val)
}

for(let val of setC.values()){
    console.log(val)
}

for(let [a,b] of setC.entries()){
    console.log(a,b)
}


