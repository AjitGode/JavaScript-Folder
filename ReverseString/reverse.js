// meethod 1

let city = "Pune"

let rev=""

for(let i=0;i<city.length;i++){
    rev=city[i]+rev
}

console.log(rev)

// method 2 

let city2 = "mumbai"

let rev2=city2.split('')

city2=rev2.reverse()

rev2= city2.join('')

console.log(rev2)

console.log(rev2)