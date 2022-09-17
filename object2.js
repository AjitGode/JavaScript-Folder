// array distract with new way

let names = ["Ajit","Sanket","Pankaj","Rushikesh","Pradip"]

let [a1,a2,a3,a4,a5]=names

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

let fruit = ["apple","banana","mango"]

let [b1,b2,b3]=fruit

console.log(b1)
console.log(b2)
console.log(b3)

//program 3 
//                         0                      1                          2
//                  0          1         0              1           0         1
let state = [["maharashtra","Jaipur"],["Rajsthan","haydrabad"],["Bihar","uttarpradesh"]]

let [[x1,x2],[y1,y2],[z1,z2]] =state

console.log(y2);
console.log(x1);
console.log(z1);


// object distract using new way
// program 4 


let info = {
    firstName:"Ajit",
    lastName:"Gode",
    age:23,
    rollNo:55
}
// console.log(info.firstName)

let {firstName:fn,lastName:ln,age:ag,rollNo:rn} = info 

console.log(fn)
console.log(ln)
console.log(ag)
console.log(rn)

// program 5 

let family ={
    parent:{
        father:"Govind",
        mother:"Sangita"

    },
    sibling:{
        brother:"vaibhav",
        sister:"shrutika"

    }

}

//alias
let {parent:{father,mother},sibling:{brother,sister}}=family

console.log(father)
console.log(mother)
console.log(brother)
console.log(sister)
