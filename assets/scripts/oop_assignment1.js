class Course {

    constructor(title, length, price){
        this.title = title;
        this.length = length;
        this.price = price;
        this.calculateHours();
    }
    
    calculateHours(course){
        const mathCourse = new Course('math', '5 hours', 25);
        
        const spanishCourse = new Course('spanish', '3 hours', 25);
            
            console.log(mathCourse);
            console.log(spanishCourse);
        if (course.title === 'math'){
            console.log(this);
            console.log(`The Math course 
            has a duration of ${mathCourse.lenght} 
            and a price of ${mathCourse.price}`)
        }
        // if (course.title ==='spanish'){
        //     console.log(`The Spanish course
        //     has a duration of ${spanishcourse.lenght}
        //     and a price of ${spanishCourse.price}`)
        // }
    }

}


function greetin(){
    console.log( 'Hey I have a javascript File working here')
}

greetin();