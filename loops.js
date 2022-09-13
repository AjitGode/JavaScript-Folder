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