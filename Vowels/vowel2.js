let str = "Hello world"
let count = 0;

for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
        case 'a':
        case 'i':
        case 'e':
        case 'o':
        case 'u':
            count++;
            break;
           
        default:
            break;
    }
}

console.log(count)