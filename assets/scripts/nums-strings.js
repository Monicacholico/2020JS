function randomIntBetween(min, max) { // min: 5, max: 10
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(3, 10));

function productDescription(strings, productName, productPrice) {
    console.log(strings);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'cheap';
    if(productPrice > 20) {
        priceCategory = 'fairly priced';
    }
    // return 'This is a product';
    // return `${strings[0]}${productName}${strings[1]}${priceCategory}`
    return {name: productName, price:productPrice};
}


const prodName = 'Javascript Course';
const prodPrice = 29.99
const productOutput = productDescription`
This product (${prodName}) is ${prodPrice}.
`;

console.log(productOutput);

const regex = /^\S+@\S+\.\S+$/;
regex.test('test@test.com');

// regex.test(userInput);
false

const btn = document.querySelector('button');

// function animate() {
    let timeCounter = setInterval(timeDisplayer, 3);
    timer = 0;
    function timeDisplayer() {
        document.getElementById('timer').innerText = timer;
        timer++;
            if(timer === 125) {
                clearInterval(timeCounter);
            }
    
        }
        
// }


// btn.addEventListener('click', animate);