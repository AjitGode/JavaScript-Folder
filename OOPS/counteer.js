class obj {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln

        this.display=function(){
           console.log(obj=count+1) 
        }
    }
}

let Ajit = new obj("Ajit","Gode")
let Amol = new obj("Amol","Vetal")

console.log(Ajit)

Ajit.display()