
let ulList = document.querySelector('ul')
let input = document.querySelector('input')
let buttonA = document.querySelector('#btn')


buttonA.addEventListener('click',function(){
    let text = input.value
    let newList = document.createElement('li')
     newList.textContent= text 
     ulList.appendChild(newList)
})