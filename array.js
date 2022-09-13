//array

//Array always store index value

let names=["Ajit","sanket","Amol","Sumedh","pradip"];
console.log(names[1]);

//printing all elements of array

for(i=0;i<=4;i++){
    console.log(names[i])
}

//              0       1        2        3
let fruits= ["Apple","Mango","Banana","Grapes"]

//javascript is object type

//type ---- human---->Ajit(object) //object has property and method
//property-- height, weight, color age
//method----talk(),walk()


//length -----property

let vegetable = ["Tamato","Patato","Brinjal","Cabbage"]
let a1 = vegetable.length  // lenth property shoows the lenth of array
console.log(a1);


//javascript 24 methods
//Methods have action and its return type

//  1. push()
//action ---> add the element at the last
//return --->new lenth of array


let a2 = vegetable.push("onion")
console.log(a2);
console.log(vegetable)

// 2 . unshift()
//action ---> add the element at the first
//return ---> new lenth of array 

let country = ["India","Russia","Shrilanka","United States"]

let a3 = country.unshift("Bali");
console.log(a3);
console.log(country)


// 3. includes
//action ---> search for the element
//return ---> if element is found it return true else return false

let a4 = country.includes("India")
console.log(a4)


// 4 .pop 
//action ---> remove the element from last 
//return ---> return the last element

let a5 = country.pop()
console.log(a5);
console.log(country)

// 5. shift 
//action ---> remove the element from first
//return ---> return first element 

let a6 = country.shift()
console.log(a6)
console.log(country)

// 6. reverse 
//action --->reverse the array
//return ---> it return new array

let a7 = country.reverse()
console.log(a7)

// 7. sort
//action ---> sorts the array alphabetically if string
//return --> new array

let a8 = country.sort()
console.log(a8)


// 8. concat
//action ---> merge the two array
//return ---> return new array

let a =[1,2,3,4]
let b =[5,6,7,8]

let q1 = a.concat(b);
console.log(q1);

// 9. join 

let info =["Ajit","Gode",8390889925]
let q2 = info.join('-');
console.log(q2);

//10. slice
//               0            1          2        3       4          5             6         7
let state = ["Maharashtra","Rajsthan","Delhi","Gujrat","Bihar","Uttarpradesh","Telangana","keral",]

//state.slice(startindex, endIndex(not included))
let q3 = state.slice(2,5);
console.log(q3);
console.log(state.slice(-5));

// 11. indexOf

let number = [11,22,33,44,55,66,77,88]

let q4 = number.indexOf(33)
console.log(q4);

let q5 = number.indexOf(30)
console.log(q5);

// 12. flat
//          0        1       2
//        0 1 2    0 1 2   0 1 2
let n = [[1,2,3,],[4,5,6],[7,8,9]]

console.log(n[0][1]);

let q6 = n.flat()
console.log(q6)

// 13. splice() 
//   add array elements and remove

let cities = ["Sangamner","Pune","Nashik","Mumbai"]
//cities.splice(startindex,Numbertobedelete)

let q7 = cities.splice(1,2,"Goa","Nagpur")
console.log(q7)
console.log(cities)

// 14. fill()
let marks = [77,78,89,66,44,33,55]
//let r10 = marks.fill('99',2)
let q8 = marks.fill(true,2,5)
console.log(q8)
console.log(marks)















