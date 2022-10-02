// program 1


// retrive elements

let headingOne = document.querySelector('h1')
let byClassName = document.querySelector('.two')
let commonF = document.querySelector('h1[name="nm"]')


console.log(headingOne)
console.log(byClassName)
console.log(commonF)

headingOne.addEventListener('click',function(){
    headingOne.style.color = "cyan"
})