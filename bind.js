// call()  bind()  apply()


let ajit = {
    firstName:"Ajit",
    lastName:"Gode",
    age:23,
    skill:["Angular","javascript","typescript"],
    display:function(){
        console.log(this.firstName+ " " +this.lastName)
    }
}

ajit.display()

let sanket = {
    firstName:"Sanket",
    lastName:"Modhe",
    age:24,
    skill:["java","c","c++"]
}

let dys = ajit.display
dys()


//getting the value of this keyword

//bind()


let vehicle ={
    color:"red",
    type:"sudane",
    displayColor:function(){
        console.log(this.color)
    }
}

vehicle.displayColor()


let vehicle2 ={
    color:"Green"
}

let ds2 = vehicle.displayColor()
// ds2()


//setting the value of this keyword

// bind()

// let ds2Updates = ds2.bind(vehicle2)

// ds2Updates()



// -----------------bind()----------------------

let info ={
    firstName:"Ajit",
    lastName:"Gode"
}

let info2 ={
    firstName:"Amol",
    lastName:"Vetal"
}

let display2 = function(){
    console.log(this.firstName+ " "+this.lastName)
}

// info.display2()

let a1 = display2.bind(info)
a1()


// call() 

display2.call(info2)
display2.call(info)


let info3 = {
    firstName:"Pankaj",
    lastName:"kharde"
}

let display3 = function(word){
      console.log(`${word} ${this.firstName}`)
}


display3.call(info3,"Good Morning")
display3.apply(info3,["Good Afternoon"])
