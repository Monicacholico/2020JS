const numbers = [1, 2, 3];

// const moreNumbers = new Array(5);
// console.log(moreNumbers);

// const yetsMoreNumbers = Array.of(1,2);
// console.log(yetsMoreNumbers);


const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const moreNumbers = Array.from('Hi!');
console.log(moreNumbers);

const hobbies = ['cooking', 'sports'];


const analyticsData = [[1, 1.6], [-5.4, 2.1] ];
const renderHtml = () => {
    let html = '';
    for (const data of analyticsData){
        for(const dataPoint of data){
            // console.log(dataPoint);
            let li = document.createElement('li');
            li.innerHTML = dataPoint;
            console.log(li.innerHTML);
            let ul = document.getElementById('data-list');
            ul.append(li);

            // html = `
            // <li>${data}</li>
            // `;
        }
    }
    // document.getElementById('data-list').innerHTML += html;
}

const myButton = document.getElementById('butt');
myButton.addEventListener('click', renderHtml);


const Elite = ['wide', 'giselle', 'short', 'regular', 'intermediate', 'beginner', 'low'];
const Alpha = ['narrow', 'egyptian', 'long','strong', 'high', 'advanced', ]



const usrOptions = document.querySelectorAll('select');
console.log(usrOptions.value);
const calculateButton = document.getElementById('calculate');
const strength = document.getElementById('strength');
const result = document.getElementById('results');
console.dir(strength)



function displaySelection (){
    const userInputs = Array.from(usrOptions);
    console.log(userInputs);
        for(usrInput of userInputs){
            console.log(usrInput.value);
            const li = document.createElement('li');
            li.innerHTML = usrInput.value;
            result.append(li);
        }

    const usrStrengthselect = strength.value;
    // alert(usrselect);
    console.log(usrStrengthselect);
    // console.log(userInputs);
    // result.innerHTML = usrStrengthselect;
    // result.innerHTML = usrInput.value;
}

calculateButton.addEventListener('click', displaySelection);






