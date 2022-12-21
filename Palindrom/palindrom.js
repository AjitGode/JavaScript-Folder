function checkpalindrom(string){
    
    let len = string.length;
    
    for(let i=0;i<len/2;i++){
        if(string[i]==string[len-1-i]){  // m ==4       m a d a m
                                         // 1-- a ==5 - 1 = 4 -1 =3 
            return 'It  is  palindrom'
        }
    }
    return 'It is not palindrom'
}
let string =prompt('Enter a string: ');
let output = checkpalindrom(string);

console.log(output)