// console.log(this);
const rjKibrea = {

    id: '43500',
    money: 5000,
    name:'Rj -Kibria',

    treatDeArrow: () =>{
        console.log(this);
    },

    treateDeInside: function () {
        const myArrow = () => console.log(this);
        myArrow();
    },

    treateDe: function(expense,){
     this.money = this.money - expense
        console.log('Here555', this);
        return this.money;
    }    
}
const heroBlam = {
    id:'54300',
    money: 6000,
    name:'Hero-Balam'
}

function add (){
    console.log(this);
}