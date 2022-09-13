// program 1 

let birthyear = [1989,1999,1985,1995]
let ages = []
 
for(i=0;i<birthyear.length;i++){
    let ag = 2022 - birthyear[i]
    ages.push(ag);
}
console.log(ages)


//program 2

let marks = [60,66,45,75,34,33,22]
let above =[];

for(i=0;i<marks.length;i++){
    if(marks[i]>35){
        above.push(marks[i]);
    }
}
console.log(above)

//program 3

let total = [11,22,33]
let sum =0;
 for(i=0;i<total.length;i++){
    sum = sum + total[i]
 }
 console.log(sum);

 //program 4

 let cities = ["pune","mumbai","karnataka","chennai"]
 for(i=0;i<cities.length;i++){
    console.log("welcome" +" " +cities[i])
 }