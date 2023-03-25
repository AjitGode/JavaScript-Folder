let string = "Indira college of engineering and management"

let str = string.toLowerCase();
let count=0;

for(let i=0;i<str.length;i++){
    if(str[i]==='e'){
        count++;
    }
}

console.log(count)