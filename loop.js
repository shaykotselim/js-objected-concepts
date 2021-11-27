const bottol ={
    color:'yellow', 
    hold:'water', 
    price: 50, 
    iceland: true
}
    /*  
    for (let i = 0; i< 10; i++){};
    for(const botto of bottol){} this loop uses for array;
    for( const botto in bottol){} this loop use for object;
    */

for(const botto in bottol){
    // console.log( botto,bottol[botto]);
}

const keys = Object.keys(bottol)
// console.log(keys);
for( const key of keys){
    // console.log(key, bottol[key]);
}

// advanced looop entiers
 const entiers = Object.entries(bottol)
// console.log(entiers);
for (const [key, value] of Object.entries(bottol)){
    console.log(key, value);
}