// what is element

//<p id="paraOne" class="paraTwo" name="paraThree">Retrive Element</p>


// html element ---type -- object--- property and method

// retrive element using css selector

//tagName 

let byTagName= document.querySelector('p')
console.log(byTagName)

// by id

let byId = document.querySelector('#paraOne')
console.log(byId)

// by class name

let byClassName = document.querySelector('.paraTwo')
console.log(byClassName)

//by Common formula

let bycommonF = document.querySelector('p[name="paraThree"]')
console.log(bycommonF)

// document.querySelector('.fruit').addEventListener('click',function(){
//     document.querySelector('.fruit').style.backgroundcolor ='yellow' ; 
// })


// event  --- click,dbclick,mouseover,mouseout

// program 1 
byId.addEventListener('click',function(){
        byId.style.color= "cyan"
})

let info = {
    fullName:"Ajit gode",
    parent:{
        mother:"Sangita",
        father:"Govind"

    }
}
info.parent.mother = " sangita G"
console.log(info)
