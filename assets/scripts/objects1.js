const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
movieList.style.display= 'block';

let person = {
    name: 'Monica',
    age: 40,
    hobbies: ['Ballet', 'Reading', 'Movies'],
    greet: function(){
        alert('Hi there!');
    }
};

//...

// person.age = 31;
delete person.age;
person.isAdmin = true;
console.log(person['name']);


// person.greet();