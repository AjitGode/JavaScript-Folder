// new way array methods

// 1.Map  ----> it return new array


let birthyear = [1990,1988,1978,1999,2000];

let a1 =birthyear.map(function(el,index,arr){
    return 2022-el
})
console.log(a1);


let addTwo = [22,33,44,55,66]

let a2 = addTwo.map(function(el,index,arr){
    return el +2
})
console.log(a2);


// 2.filter  -- new array

let marks = [40,33,45,55,67,98,75]

let a3 = marks.filter(function(el,index,arr){
    return el > 40;
})
console.log(a3)


// 3. reduce  ---> value

let sum = [22,34,54,55,33,21]

let a4 = sum.reduce(function(acc,el,index,arr){
        return acc + el // 0 + 22  == 22
                        // 22+ 34 == 56
},0)
console.log(a4)

// 4.forEach  --- > join value

let cities = ["pune","Nashik","Sambhaji nagar","dhule","Mumbai"]

let a5 = cities.forEach(function(el,index,arr){
    console.log("welcome "+el)

})

// 5.find --- > value

let num = [11,22,33,44,55,66,77]

let a6 = num.find(function(el,index,arr){
    return el >20 
})

console.log(a6)

// 6.findIndex --> value

let a7 = num.findIndex(function(el,index,arr){
    return el >40
})
console.log(a7)

// 7. some  // it return boolean value

let n = [11,21,31,41,51,61,71,81]

let a8 = n.some(function(el,index,arr){
    return el >90
})
console.log(a8)

// 8.every  //it return boolean value

let a9 = n.every(function(el,index,arr){
    return el >10
})
console.log(a9)

