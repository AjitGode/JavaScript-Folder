

// functions 

// in single variable we copy anto another variable that time create two memory location
//in array and object not create another memory location

//program 1

let a=10;
console.log(a)
a= 300;
console.log(a)

let x= 10;

let y =x 
console.log(x)
console.log(y)
 y=100;
 console.log(y)

 //program 2

 let names = ["Ajit","Sanket","Sumedh"]
 let copyArr= names;
copyArr[0]="Pankaj";

console.log(names);
console.log(copyArr);

//program 3
let fi ={
    firstName:"Ajit",
    lastName:"Gode"
}

let li=fi;
fi.lastName="ABC"

console.log(li);
console.log(fi);

//program 4

let vehicle ={
    color:"red",
    type:"sedane"
}

function updateColor(obj){
    //let obj=vehicle
    obj.color="blue"
    console.log(obj)

}
updateColor(vehicle)
console.log(vehicle)

//array as parameter to function 

let cities =["pune","nagpur","mumbai","Delhi"]
function addValue(arr){
    arr.push("Nashik")
    console.log(arr)

}
addValue(cities)