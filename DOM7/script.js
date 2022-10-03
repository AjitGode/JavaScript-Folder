
let headOne = document.querySelector('h1')
let para = document.querySelector('#para')
let listFirstElement= document.querySelector('.fruit')
let allLiElement = document.querySelectorAll('.fruit')


console.log(headOne)
console.log(para)
console.log(listFirstElement)
console.log(allLiElement)


// Retrive elements


let paraE = document.getElementById('para')
let allLi= document.getElementsByClassName('fruit')  //HTML collection
let allLiName = document.getElementsByName('o') // Node elements
let q =document.getElementsByTagName('li')


console.log(paraE)
console.log(allLi)
console.log(allLiName)
console.log(q)

let headThree = document.querySelector('h3')
console.log(headThree.classList)


headThree.classList.add('a','b')
headThree.classList.remove('a')
headThree.classList.toggle('a')  //add
headThree.classList.toggle('a')  //remove


headThree.setAttribute('b','new')
let q2 = headThree.getAttribute('b')
console.log(q2)