class Person{
    name = 'Max'
    
    constructor(){
        this.age = 30;
    }

    greet() {
        console.log(
            'Hi I am ' + this.name + 'and I am ' + this.age + ' years old.'
        )
    }
}

const newP = new Person();
person.greet();


function Person1() {
    this.age = 30;
    this.name = 'Max';
    this.greet = function(){
        console.log(
            'Hi I am ' + this.name + ' and I am ' + this.age + ' years old'
        )
    }
} 

const per1 = new Person1();
person1.greet();


