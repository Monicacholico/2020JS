const myArrayNumbers = [ 5, 10, 15, 20, 25 ];

const myHighNumbers = myArrayNumbers.filter((number)=> number > 5);

// highNumbers.push(30);

console.log(myHighNumbers, myArrayNumbers);

const myNumbersObject = myArrayNumbers.map((number, idx) => {
    
const myNewObj = {cost: number};

return myNewObj;   
// console.log('This is your new Object', myNewObj);
});
console.log("mynumbersObject looks like: " , myNumbersObject);
// console.log(numbersObject);

// const sum = numbersObject.map((newObj) => newObj.cost)
//                         .reduce((sumVal, curVal) => sumVal * curVal, 0 )

// console.log(sum);



// let sum= 0;
// arrayNumbers.reduce((a, b) => {
//     let multi = a * b;
    // const result = sum + multi;
    // console.log('This is your result: ', multi);
// }, 5)




// const findMax = () => {

//     console.log(arrayNumbers.MathMax(number));
// }
// console.log(findMax);



//////////////////////////////////////////////////////

const arrayNumbers = [ 5, 10, 15, 20, 25 ];

const highNumbers = arrayNumbers.filter((number) => number > 5);

console.log(highNumbers, arrayNumbers);

const numbersObject = arrayNumbers.map(val => ({num: val}));

console.log(numbersObject);

const mappedNumbers = arrayNumbers.map(function(val){
    return {num: val};
});

const multiplication = arrayNumbers.reduce((preVal, curValue) => preVal * curValue, 1 );
console.log( multiplication);


// const sum = numbersObject.map((newObj) => newObj.cost)
//                         .reduce((sumVal, curVal) => sumVal * curVal, 0 )

// console.log(sum);


// let sum= 0;
const newMult = arrayNumbers.reduce((a, b) =>  a * b, 1)
console.log(newMult);

const oldReduce = arrayNumbers.reduce(function(curResult, curValue){
    return curResult * curValue;
}, 1);
console.log(oldReduce);




// const findMax = () => {

//     console.log(arrayNumbers.MathMax(number));
// }
// console.log(findMax);

function findMax(...arrayNumbers){
    let curMax = arrayNumbers[0];
    let curMin = arrayNumbers[0];
    for(const number of arrayNumbers){
        if(number > curMax){
            curMax = number;
        }
        if(number < curMin){
            curMin = number;
        }
    }
    return [curMax,curMin];
}

const [min, max]= findMax(...arrayNumbers);
console.log(min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-5);

console.log(userIds);
