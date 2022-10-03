
let ulList = document.querySelector('ul')
let input = document.querySelector('input')
let button = document.querySelector('#btn')


button.addEventListener('click',function(){
    let text = input.value

    let newlist = document.createElement('li')
    newlist.textContent = text
    ulList.appendChild(newlist)
    input.value = " "

    
})