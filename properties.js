const bottol ={
            color:'yellow', hold:'water', price: 50, iceland: true
}
// getting all properties
const keys = Object.keys(bottol)
// console.log(keys);

// getting values
const values = Object.values(bottol);
// console.log(values);

// getting entiers
const entiers = Object.entries(bottol);
// console.log(entiers);

// seal maria dialm
Object.seal(bottol)

// delete koira dilam but age seal marar karone delete hoilo na
// delete bottol.price

// freeze is very dangerous because kno property er value o change hobe na ai bar delete howa tooooo durer kota

// Object.freeze(bottol)
delete bottol.price
bottol.price =100

console.log(bottol);