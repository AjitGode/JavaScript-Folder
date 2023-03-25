

let array =[1,2,3,4,5]
let k=2

function rotateArray(k,array){
    for(let i=0;i<k;i++){
        array.unshift(array.pop())
    }
    return array
}

let opt = rotateArray(k,array)
console.log(opt)