const students = {
                name:'Rj-Kibrea',
                id: '43500',
                bestFriend:{name:'Shaykot', sub:'math' },
                major:'mathmatich',
                sub:['bangla', 'English', 'Stastics', 'Calculas'],
                isRich: false,
                money: 5000,
    
   takeExam: function(){
    //    console.log(this.bestFriend.sub);
   },
   treateDe: function(expense, tips){
       this.money = this.money - expense - tips;
       return this.money;
   }    
}
students.takeExam()
const billFirst = students.treateDe(400, 60);
const billSecond = students.treateDe(100, 40);
console.log(billSecond);