const myPointeShoe = (function(){


    class psBanner {
        constructor(pointeShoe) {
            this.name = pointeShoe.name;
            this.brand = pointeShoe.brand;
            this.level = pointeShoe.level;
            this.type = pointeShoe.type;
            this.length = pointeShoe.length;
            this.strength = pointeShoe.strength;
            this.width = pointeShoe.width;
            this.build();
        }
    
        build(){
            const html = `<div>
            <h2>${this.name} </h2>
            <ul class="ps-list">
                <li> It's brand is: ${this.brand}</li>
                <li> Best level to wear: ${this.level}</li>
                <li> Best type of feet to wear: ${this.type}</li>
                <li> Best length of toes to wear: ${this.length}</li>
                <li> Best strength of feet: ${this.strength}</li>
                <li> Recommended width to wear: ${this.width}</li>
            </ul>
            </div>
            `
            const displayer = document.getElementById('wrapper').innerHTML += html;
            console.log(displayer);
        }
    };
    
     return psBanner;
})();





// function hello(greeting) {
//     console.log('I am Monica ' + greeting);
// };
// hello('how are you?');



