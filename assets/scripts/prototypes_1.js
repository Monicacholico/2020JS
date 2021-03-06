class AgedPerson {
    printAge(){
        console.log(this.age);
    }
}

class Person {
    name = 'Max'
    
    constructor(){
        // super();
        this.age = 30;
    }

    // greet = function(){ // uses more memory and needs more performance
    //     console.log(
    //                 'Hi I am ' + this.name + 'and I am ' + this.age + ' years old.'
    //             )
    // }

    // greet = () => { // With arrow function it'll be easier to use for example on an eventlistener because "this" will be already bind
    //     console.log(
    //                 'Hi I am ' + this.name + 'and I am ' + this.age + ' years old.'
    //             )
    // } 

    greet() {
        console.log(
            'Hi I am ' + this.name + 'and I am ' + this.age + ' years old.'
        )
    }
}

const newP = new Person();
newP.greet();
console.log(newP);
console.log(newP.__proto__);


// function Person1() {
//     this.age = 30;
//     this.name = 'Max';
//     this.greet = function(){
//         console.log(
//             'Hi I am ' + this.name + ' and I am ' + this.age + ' years old'
//         )
//     }
// } 

// // Person1.prototype = {
// //     printAge() {
// //         console.lot(this.age)
// //     }
// // }

// Person1.prototype.printAge = function(){
//     console.log(this.age);
// }

// Person1.toString();

// console.log(Person1);

// const p = new Person1();
// p.greet();
// console.log(p.__proto__ );
// console.log(p.toString());
// console.dir(Object);

// const per = new Person();
// const per1 = new Person();
// console.log(per.__proto__ === per1.__proto__);

// const button = document.getElementById('btn');
// button.addEventListener('click', newP.greet.bind(newP));

const course = { // new Object();
    title: 'Javascript New guide',
    rating: 5
}; 

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
    ...Object.getPrototypeOf(course),
    printRating: function(){
        console.log(`${this.rating}/5`)
    }
});

const student = Object.create({
    printProgress: function(){
        console.log(this.progress);
    }
}, {
    name: {
        configurable: true,
        enumerable: true,
        value: 'Max',
        writable: true
    }
});

// student.name = "max";

Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    value:  0.8,
    writable: false
})

student.printProgress();

course.printRating();

// console.log(course._proto_);
// course.printRating();
