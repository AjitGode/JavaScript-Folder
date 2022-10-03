
// retrive element

let ulList = document.querySelector('ul')
let input = document.querySelector('input')
let buttonA = document.querySelector('#btn')

buttonA.addEventListener('click',function(){
    let text = input.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    createButton(newLi)
    ulList.appendChild(newLi)
})


// create buttons

function createButton(li){
    let remove = document.createElement('button')
    remove.textContent = "Remove"
    remove.className = "remove"
    li.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = "Up"
    up.className = "up"
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = "Down"
    down.className = "down"
    li.appendChild(down)
}

// perform action on buttons


ulList.addEventListener('click',function(event){
    if(event.target.tagName ==="BUTTON"){
        if(event.target.className==="remove"){
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }else if(event.target.className==="down"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let nextLi = li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }
        }else if(event.target.className ==="up"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let previous = li.previousElementSibling
            if(previous){
                ul.insertBefore(li,previous)
            }
        }
    }
})