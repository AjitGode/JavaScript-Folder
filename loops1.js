//if else
//5 changes --coin toss -head break finite chance---->for loop
//toss until the head comes --- chances till condition is mate ---> while loop

//code random number----(1,2,3,4,5,6)---dice

// console.log(Math.floor(23.5))
// console.log(Math.ceil(44.5))
// console.log(Math.random())  // 0 -1
// console.log(Math.random()*6)  // 0 - 6 // 
// console.log(Math.floor(Math.random()*6)+1)


//for 1st condition

// let randomNumber = Math.floor(Math.random()*6)+1;
// console.log(randomNumber)

// let userInput= prompt('Enter any Number Between 1 to 6');

// if(randomNumber==userInput){
//     console.log('Your guess is coreect')
// }else{
//     console.log('Your guess is incorrect')
// }


//for 2nd condition

// let randomNumber= Math.floor(Math.random()*6)+1;
// console.log(randomNumber);
// for(i=1;i<=5;i++){
//     let userInput= prompt('Enter any Number between 1 to 6');
//     if(userInput==randomNumber){
//         console.log('Your guess is correct')
//         break;
//     }else{
//         console.log('your guess is incorrect');

//     }
// }

//until condition mate
let randomNumber= Math.floor(Math.random()*6)+1;
console.log(randomNumber);

let userInput;
while(userInput!=randomNumber){
    userInput= prompt('Enter any Number between 1 to 6');
    if(userInput==randomNumber){
        console.log('Your guess is correct');
    }else{
        console.log('Your guess is incorrect');
    }
}



