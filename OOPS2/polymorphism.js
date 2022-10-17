// ploymorphism ------ >  same class , same method , diff signature 

//Poly --->  many
// Morphism ----> Forms 


class addition {
    add(x,y){
        console.log(x+y)
    }
    add(x,y,z){
        console.log(x+y+z)
    }
    add(x,y,z,u){
        console.log(x+y+z+u)
    }
}

let a = new addition()

a.add(12,2,2,2)