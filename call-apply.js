const rjKibrea = {

    id: '43500',
    money: 5000,
    name:'Rj -Kibria',

    treateDe: function(expense, tips, tax){
     this.money = this.money - expense - tips - tax
        console.log(this);
        return this.money;
}    
}
const heroBlam = {
    id:'54300',
    money: 6000,
    name:'Hero-Balam'
}
const jhankarMahabub = {
    id: '999',
    money: 5500,
    name: 'Jhankar - Mahabub'
}
// call 
rjKibrea.treateDe.call(jhankarMahabub, 500, 100, 50)
rjKibrea.treateDe.call(jhankarMahabub, 300, 50, 30)
// apply
rjKibrea.treateDe.apply(heroBlam, [1000, 100, 50])
rjKibrea.treateDe.apply(heroBlam,[ 500, 40, 20])

