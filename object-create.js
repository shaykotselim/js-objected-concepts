// 1.using object literal
const students ={ name:'Shaykot_Selim', profession:'Web-Developer', age: 24}

// 2.Constructor

const person = new Object();
// 3.
const human = Object.create(students)
// console.log(human.age);

// 4.
class People{
    constructor(name, age, job, salary){
        this.name = name;
        this.age = age;
        this.job = job;
        this.salary = salary;
    }
}
    const peop = new People('Selim', 24, 'Web-Developer', '10K$')
    // console.log(peop);

    // 5.
    function people (name, age){
            this.name = name;
            this.age = age;
    }
    const men = new people('Kislo', 24)
    console.log(men);