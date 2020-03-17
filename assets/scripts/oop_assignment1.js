class Course {

    constructor(title, length, price){
        this.title = title;
        this.length = length;
        this.price = price;
        this.calculateHours();
    }

    calculateHours() {
        return this.length/this.price;
    }

    printSummary(){
        console.log(`Title: ${this.title}, length: ${this.length}, price: ${this.price}`)
    }
    
    // calculateHours(){
    //     const mathCourse = new Course('math', '5 hours', 25);
        
    //     const spanishCourse = new Course('spanish', '3 hours', 25);
            
    //         console.log(mathCourse);
    //         console.log(spanishCourse);
    //     if (course.title === 'math'){
    //         console.log(this);
    //         console.log(`The Math course 
    //         has a duration of ${mathCourse.lenght} 
    //         and a price of ${mathCourse.price}`)
    //     }
        // if (course.title ==='spanish'){
        //     console.log(`The Spanish course
        //     has a duration of ${spanishcourse.lenght}
        //     and a price of ${spanishCourse.price}`)
        // }
    // }

}

const mathCourse = new Course('math', 5, 25);
        
const spanishCourse = new Course('spanish', 3, 21);
    
console.log(mathCourse);
console.log(spanishCourse);

console.log(spanishCourse.calculateHours());
console.log(mathCourse.calculateHours());

spanishCourse.printSummary();
mathCourse.printSummary();


class PracticalCourse extends Course {
    constructor(title, lenght, price, exerciseCount){
        super(title, lenght, price);
        this.numOfExercises = exerciseCount;
    }
}

const dutchCourse = new PracticalCourse('Dutch', 7, 28, 10)

console.log(dutchCourse);
dutchCourse.printSummary();


class TheoreticalCourse extends Course {
    publish(){
        console.log("I'm printing something")
    }
}

const historicCourse = new TheoreticalCourse('History', 5, 28, 15);

console.log(historicCourse);
historicCourse.printSummary();
historicCourse.publish();


function greetin(){
    console.log( 'Hey I have a javascript File working here')
}

greetin();