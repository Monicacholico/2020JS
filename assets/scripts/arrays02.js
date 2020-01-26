
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
const taxAdjustedPrices = [];

for(const price of prices) {
    taxAdjustedPrices.push(price * (1 + tax));
}
console.log(taxAdjustedPrices);

// prices.forEach((price, index, prices) => {
//     taxAdjustedPrices.push(price * (1 + tax));
// })