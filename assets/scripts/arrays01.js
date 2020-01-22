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