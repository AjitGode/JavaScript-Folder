//comparision operator

//<,> <=, >=, !=,==, ===, !==


// ==, != --> Value
// ===, !== -->value and type


// console.log(2<3);
// console.log(5==5);
// console.log(5>=7);
// console.log(5<=7);
// console.log(5!=7);

//strict comparision

// console.log(7==='7')//it check value and type
// console.log(6!=='6')
// console.log(7!=='7')
// console.log(7=='7')
// console.log(5!='5')

//logical operator

//AND

// True   && True  -- True
// False  && True  -- False
// True   && False  --False
// False  && False  --False

console.log(7 == 7 && 8 == 8)
console.log( 7 != '7' && 9 == '9')
console.log( 7 !== '7' && 9 === '9')
console.log( 7 == 6 && 9 == 8)



// OR 
// True   || True  -- True
// False  || True  -- True
// True   || False  --True
// False  || False  --False

console.log(7 == 7 || 8 == 8) // True
console.log( 7 != '7' || 9 == '9') // True
console.log( 7 !== '7' || 9 === '9') // True
console.log( 7 == 6 || 9 == 8) // False


// NOT
// True False
// False True
console.log(!7 === 7)
console.log(!7 === '7')