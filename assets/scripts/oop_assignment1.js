class Mourse {

    constructor(title, length, price){
        this.title = title;
        this.length = length;
        this.price = price;
        // this.greeting();
        this.display();

    }

    greeting() {
        console.log('hello');
    }

    display(){
        new Mourse (
            'Math', '1 hour', 15
        )
        console.log(new Mourse());
        const allCourses = [];
           const mathCourse = new Mourse(
                'math', '5 hours', 25
                );
        
            const spanishCourse = new Mourse(
                'spanish', '3 hours', 25
            );

        console.log(this.mathCourse.title);
        console.log(this.spanishCourse.price);
    }
    
}

function greetin(){
    console.log( 'Hey I have a javascript File working here')
}

greetin();