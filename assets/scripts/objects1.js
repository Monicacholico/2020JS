const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
movieList.style.display= 'block';

const userChosenKeyName = 'level'; // let's say a user input

let person = {
    name: 'Monica',
    age: 40,
    hobbies: ['Ballet', 'Reading', 'Movies'],
    [userChosenKeyName]: '...',
    greet: function(){
        alert('Hi there!');
    },
    1.5: 'hello'
};

//...

// person.age = 31;
delete person.age;
person.isAdmin = true;

const keyName = 'name';

console.log(person[keyName]);
// console.log(person['name']);
console.log(person[1.5]);
console.log(person);


// person.greet();