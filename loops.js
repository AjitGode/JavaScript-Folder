// 2 types in js --- for loop and while loop

//syntax -- > for(initialization;conditioncheck, increment/decrement){
    //statement of code
//}


//program-- print 0 to 5 

for(i=0;i<6; i++){
    console.log(i);
}

//print 1 to 3

for(i=1; i<=3; i++){
    console.log(i);
}

//print 1 to 10
for(i=1; i<=10; i++){
    console.log(i);
}

//print 10 to 1
for(i=10; i>=1; i--){
    console.log(i);
}

//print table of 2

for(i=2;i<=20; i = i+2){
    console.log(i);
}


//break statement with for loop

for(let i=1; i<=5; i++){
    console.log(i);
    if(i==2){
        break;
    }
}

for(i=1; i<=5; i++){
    if(i==2){
        break;
    }
    console.log(i);
}

//continue statement with for loop

for(i=1; i<=5;i++){
    if(i==2){
        continue;
    }
    console.log(i);
}


// reverse 10 to 2 

for(let i=10;i>=2;i--){
    console.log(i)
}

// Create array = [50, 48, 46, 44, 42]

let arr = []

for(let i=50;i>=42;i=i-2){
    arr.push(i)

}
console.log(arr)

// Find the sum of squares of first 20 odd numbers which divisible by 3.

let sum = 0; 
let count = 0;
for (let i = 3; count < 20; i =i+ 6) { 
    sum = sum + i * i;
    count++;
}
console.log(sum);