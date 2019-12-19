let randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
let anotherRandom = Math.random();
let message = 'This is my message';


if(randomNumber >= 0.7){
    alert(message);
} else {
    alert('not greater');
}
console.log(randomNumber);



let myNumbers = [2, 4, 6, 8, 10, 13, 4, 6, 8, 10, 12, 26];

function withFor(){
    for(let i = 0; i > myNumbers.length; i++){
        console.log(myNumbers[i]);
    }
}

function withForOf(){

    for(const num of myNumbers){
        console.log(num);
    }
}

let counter = 0;
while(counter < myNumbers.length){
    console.log(myNumbers[counter])
    counter++;
}

function reversewithFor(){
    for(let i = myNumbers.length - 1; i > 0; i--){
        console.log(myNumbers[i]);
    }
}

function checkingRdn(){
    console.log(randomNumber);
    console.log(anotherRandom);
    if((randomNumber && anotherRandom > 0.7) || 
    randomNumber <= 0.2 ||
    anotherRandom <= 0.2 ){
        alert('Greater than 0.7 or smaller than 0.2');
    }
}







