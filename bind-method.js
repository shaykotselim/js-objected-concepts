const rjKibrea = {

    id: '43500',
    money: 5000,
    name:'Rj -Kibria',

    treateDe: function(expense){
     this.money = this.money - expense
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
rjKibrea.treateDe(100)

const heroTreatDe = rjKibrea.treateDe.bind(heroBlam)
heroTreatDe(400)

const jhnakarvai = rjKibrea.treateDe.bind(jhankarMahabub);
jhnakarvai(5000)