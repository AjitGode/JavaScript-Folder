//while loops step

//ist initialization

//while(condition){}

// increment

//example

//print 1 to 3

let i=0;

while(i<3){
    console.log("Hello");
    i++;
}

//print 1 to 10

let A=1;
while(A<=10){
    console.log(A);
    A++;
}
console.log("-------------------------------")
//print 10 to 1

let b=10;
while(b>=1){
    console.log(b);
    b--;
}

console.log("-----------------Table of 3--------------");

let c=3;
while(c<=30){
    console.log(c);
    c=c+3;
}

console.log("-----------------------");

//break statement with while loop

let d=1;
while(d<5){
    if(d==2){
        break;
    }
    console.log(d);
    d++;
}
console.log("-----------------------");
let e=1;
while(e<5){
    console.log(e);
    if(e==2){
        break;
    }
    e++;
}