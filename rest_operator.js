function add(a,b,c,d,e,f){
    console.log(a+b+c+d+e+f)
}
 add(1,2,3,4,5,6)
// console.log(a1)

//program 2

//rest operator

function addB(...arr){
    let a2 =arr.reduce(function(acc,el){
       return acc +el
    },0)
    return a2

}
let a3 = addB(12,34,12,12,45,67,89,1,2,3)
console.log(a3)

//12,33,44,12,32 =====>[12,33,44,12,32]--> rest operator


//program 3

let marks = [33,44,55,66,77,88,99,100]

function addFive(a,b,c,d,e){
    console.log(a+b+c+d+e)

}
//addFirstFive(marks[0],marks[1],marks[2],marks[3],marks[4])
addFive(...marks)

//[33,44,55,66,77,88,99,100]  ----->33,44,55,66,77,88,99,100

// 1,2,3 ---> [1,2,3] --- rest operator
//[1,2,3] ---> 1,2,3 --- spread oparator

//practice example
let sum =0;
function fun(...input){
    
for(let i of input){
    sum=sum+i
}
return sum
}
console.log(fun(1,2,3,4,5))