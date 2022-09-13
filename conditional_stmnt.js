//conditional statement

//input one ---- outcomes multiple


//numberT > 0 && numberT <=5 // 5% discount
//numberT >5 && numberT <= 10 // 10% discount
//numberT >10 //20 discount

// if block checck all statement

let numberT= -11;
// if(numberT>0 && numberT<=5){
//     console.log("5% discount");
// }
// if(numberT>5 && numberT<=10){
//     console.log("10% discount");
// }
// if(numberT>10){
//     console.log("20% discount");
// }

// else if --> if block will false the it will go to else block

if(numberT>0 && numberT<=5){
    console.log("5% discount");
}
else if(numberT>5 && numberT<=10){
    console.log("10% discount");
}
else if(numberT>10){
    console.log("20% discount");
}
else{
    console.log("incorrect input");
}

//proram 2 Marks

let marks = 60;

if(marks>90){
    console.log("Grade A");
}
else if(marks>75){
    console.log("Grade B");
}
else if(marks>65){
    console.log("Grade C");
}
else{
    console.log("Fail");
}
