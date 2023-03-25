      //      0      1       2
let strs=["flower","flow","float"]
//op -- fl 

function prefix(strs){
     for(let i=0;i<strs[0].length;i++){
        for(j=1;j<strs.length;j++){
            if(strs[0][i]!=strs[j][i]){
                 return strs[0].slice(0,i)
            }
        }
     }
     return strs[0]
}

console.log(prefix(strs))