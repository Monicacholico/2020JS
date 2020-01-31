
// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading' rarely used;
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// hobbies.unshift('ballet');
// console.log(hobbies);

// hobbies.splice(-2, 1, 'reading')
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice(0, 2);

// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(testResults, storedResults);
// console.log(testResults.indexOf(1.5));

// const personData = [{name: 'Max'}, {name: 'Manuel'}];
// console.log(personData.indexOf({name: 'Manuel'}));

// const manuel = personData.find((person, index, persons) => {
//     return person.name === 'Manuel';
// });

// manuel.name = 'Anna';


// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, index, persons) => {
//     return person.name === 'Max';
// });

// console.log(maxIndex);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
// const taxAdjustedPrices = [];

// for(const price of prices) {
//     taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((price, idx, prices) => {
//         const priceObj = {index: idx, taxAdjustedPrice : price * (1 + tax)}
//         taxAdjustedPrices.push(priceObj);
//     })

//     console.log(taxAdjustedPrices);

  
const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjustedPrice : price * (1 + tax)}
    return priceObj;
})

console.log(prices, taxAdjustedPrices);


const sortedPrices = prices.sort((a, b) => {
    if(a > b){
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});
console.log(sortedPrices.reverse());

// const filteredArray = prices.filter((price, idx) => {
//     return price > 6;
// });

const filteredArray = prices.filter(price => price > 6);

console.log(filteredArray);

// let sum = 0;

// prices.forEach(price => {
//     sum += price
// });

// console.log(sum);


const sum = prices.reduce((prev, current) => prev + current, 0);
console.log(sum);

const data = 'new york;10.99;2000';

const transformData = data.split(';');
transformData[1] = +transformData[1]; // or transformData[1] * 1;
console.log(transformData);

const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' ');
console.log(name);

const copyOfnameFragments = [...nameFragments];
nameFragments.push('Mr');
console.log(nameFragments, copyOfnameFragments);

 console.log("This " + Math.min(1, 5, -3));
 console.log(Math.min(...prices));

 const firstBeatles = [{name: 'John', age: 30}, {name: 'Paul', age: 29}, {name: 'Ringo', age: 34}];
 secondBeatles = [...firstBeatles];

 firstBeatles.push({name: 'George', age: 32});
 firstBeatles[0].age = 50; 

 console.log(firstBeatles, secondBeatles);