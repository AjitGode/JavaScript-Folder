// program 3

//retrive element 

let heading = document.querySelector('#heading')
let input = document.querySelector('#text')
let button = document.querySelector('#btn')


button.addEventListener('click',function(){
    let colorText = input.value;
    heading.style.color = colorText;
    input.value = "";
})