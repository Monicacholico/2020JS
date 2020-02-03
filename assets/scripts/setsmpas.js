// const ids = new Set(['Hi', 'From', 'Set']);
// ids.add(2);
// ids.delete('Set');

// for (const entry of ids.values()){

//     console.log(entry);
// };

// const person1 = {name: 'Max'};
// const person2 = {name: 'Manuel'};

// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

// personData.set(person2, [{date: 'two weeks ago', price: 100}])

// console.log(personData);
// console.log(personData.get(person1));

// for (const entry of personData.entries()){
//     console.log(entry);
// };
// for (const [key, value] of personData.entries()){
//     console.log(key, value);
// };

// for (const key of personData.keys()){
//     console.log(key);
// };
// for (const value of personData.values()){
//     console.log(value);
// };

let person = {name: 'Max'};
const persons = new WeakSet();

persons.add(person);

// ... some operations
// person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info');

person = null;

console.log(personData);