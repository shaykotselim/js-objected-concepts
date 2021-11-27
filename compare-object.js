// const first = {a: 1, b: 2};
// const second ={a: 1, b: 2};
// const third = first;

/*
if (first === third ) {
    console.log('Object are Equal');
}
else{
        console.log('Object are not Equal');
}
*/
// console.log(JSON.stringify(first));
// console.log(JSON.stringify(second));

// if( JSON.stringify(first) === JSON.stringify(second)){
//     console.log('Object Both are Equal');
// }
// else{ console.log('Object Both are Not Equal');}


// const first2 = {a: 1, b: 2};
// const second2 ={b: 2, a: 1};

// if( JSON.stringify(first2)===JSON.stringify(second2)){
//     console.log('Both are Object Equal');
// }
// else{
//         console.log('Both are Object not Equal');
// }

const first2 = {a: 1, b: 2};
const second2 ={b: 2, a: 1};

function compareObj(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[porp]){
            return false;
        }
    }
    return true;
}
const isEqual = compareObj(first2, second2)
console.log(isEqual);