const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');
    if(movies.length === 0){
        movieList.classList.remove('visible');
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter 
    ? movies : 
    movies.filter( movie => movie.info.title.includes(filter));

    filteredMovies.forEach( movie => {
        const movieEl = document.createElement('li');
        // if(!('info' in movie)){
        
        // } Validation in case you wanna throw errors
        // movieEl.textContent = movie.info.title;
        const {info, ...otherProps } = movie;
        console.log(otherProps);
        // const { title: movieTitle} = info;
        // const {getFormattedTitle} = movie;
        let text = movie.getFormattedTitle + ' - ';
        // let text = movie.info.title + ' - ';
        for(const key in info){ 
            if(key !== 'title') {
                text = text + `${key}: ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
}

const addMovieHandler = () => {
    const title= document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (
        title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === '' 
        ){
            return;
        }
        const newMovie = {
            info: {
                title,
                [extraName]: extraValue
            },
            id: Math.random(),
            getFormattedTitle: function(){
                return this.info.title.toUpperCase();
            }
        };
    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);




const person = {name: 'Max', hobbies: ['Sports', 'Cooking']};

const anotherPerson = person;
person.age = 30;

const person3 = {...person, age: 29}


const person = {name: 'Monica'};

const person2 = Object.assign({}, person);


console.log(person2);
person.name = 'Monica2';
