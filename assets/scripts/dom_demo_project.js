const openAddMovieButton = document.querySelector('header > button');
const modalAddMovie = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const cancelAddMovieButton = document.getElementById('notAddMovie');
const addMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = modalAddMovie.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');


const movies = [];



const updateUI = () => {
    if(movies.length === 0){
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}</p>
    </div>
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}


const toggleBackDrop = () => {
    backDrop.classList.toggle('visible');
}

const backdropClickHandler = () => {
    toggleMovieModal();
} 

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInputs();
}

const clearMovieInputs = () => {
    for (const userInput of userInputs) {
       userInput.value = '';
    }
} 

const toggleMovieModal = () => {
    modalAddMovie.classList.toggle('visible');
    toggleBackDrop();
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrl = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    if(titleValue.trim() === '' || imageUrl.trim() === ''
    || ratingValue.trim() === ''|| ratingValue < 1 || ratingValue > 5){
        alert('Please enter valid values!');
    }
    const newMovie = {
        title: titleValue,
        image: imageUrl,
        rating: ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInputs();
    updateUI();
    renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);

}

openAddMovieButton.addEventListener('click', toggleMovieModal);
backDrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
addMovieButton.addEventListener('click', addMovieHandler);
