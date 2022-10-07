// style cannot be retrive using style.css prperty

let headOne = document.querySelector('h1')
let ButtonA = document.querySelector('button')

console.log(headOne.style)

let style =getComputedStyle(headOne)

// console.log(style)


// inlines css ----- you retrives this
// let headTwo = document.querySelector('h2')
// console.log(headTwo.style)

// headTwo.style.color = "orange";


// Actions 

// 1. click

ButtonA.addEventListener('click',function(){
    headOne.style.color = "red"
})

// 2. dbclick 
  
ButtonA.addEventListener('dblclick',function(){
    headOne.style.color = "purple"
})

// 3. mouseover

ButtonA.addEventListener('mouseover',function(){
    headOne.style.color = "lightblue"
})

//4. mouseout

ButtonA.addEventListener('mouseout',function(){
    headOne.style.color = "lightgreen"
})

//5. relod

//alert()
//confirm()
//prompt()

// console.log(window)

// ButtonA.addEventListener('click',function(){
//     window.alert('Hello Ajit')
// })

// ButtonA.addEventListener('click',function(){
//     window.confirm('Are you sure.....')
// })

// ButtonA.addEventListener('click',function(){
//     window.prompt('Enter your name.')
// })


ButtonA.addEventListener('click',function(){
    window.location.reload()
})

//scrollIntoView

let IdElement = document.querySelector('#two')
ButtonA.addEventListener('click',function(){
    IdElement.scrollIntoView()
})