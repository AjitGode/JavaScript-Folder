 let names = ["Ajit","Sanket","sumedh","Pradip"]

 //retrive
 console.log(names[0])

//update 

names[1]="suyog"
console.log(names)

//add 
names.unshift("Akash")
names.push("jahid")
console.log(names)

//delete

names.pop()
names.shift()
console.log(names)

//loop

for(let i=0;i<names.length;i++){
    console.log(names[i])
}

//------------------------------------------------

 //Objects

 //objects does not store the value by index
 //objects store elements in property - value / key-value

 let info = {
    firstName:"Ajit",
    lastName:"Gode",
    Age:23,
    rollNo:55
 }

 //retrive -- dot and bracket

 //object.property

console.log(info.firstName)
console.log(info['firstName'])

// update -- dot and bracket

info.firstName= "Sanket";
info['firstName']="Vaibhav";

console.log(info);

// add -- dot and bracket

info.city = "Pune";
info['language']="English"

console.log(info);

// delete -- dot and  bracket

delete info.city;
delete info['language']

console.log(info);

// for loop for object

for(let property in info){
    console.log(property,info[property])
}
