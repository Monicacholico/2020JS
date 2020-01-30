
class psBanner {
    constructor(pointeShoe){
        pointeShoe.name = this.name;
        pointeShoe.brand = this.brand;
        pointeShoe.level = this.level;
        pointeShoe.type = this.type;
        pointeShoe.length = this.length;
        pointeShoe.strength = this.strength;
        pointeShoe.width = this.width;
        this.build();

    }

    build(){
        const html = `<div>
        <h2>${this.name} has: </h2>
        <ul>
            <li>${this.brand}</li>
            <li>${this.level}</li>
            <li>${this.type}</li>
            <li>${this.length}</li>
            <li>${this.strenght}</li>
            <li>${this.width}</li>
        </ul>
        </div>
        `
        const displayer = document.getElementById('wrapper').innerHTML += html;
        console.log(displayer);
    }
};

function hello(greeting) {
    console.log('I am Monica ' + greeting);
};
hello('how are you?');



