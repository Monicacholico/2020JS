const openAddMovieButton = document.querySelector('header > button');
const modalAddMovie = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const cancelAddMovieButton = document.getElementById('notAddMovie');
const addMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = modalAddMovie.querySelectorAll('input');

const inputmovieTitle = document.getElementById('title').va;
console.log(inputmovieTitle);
const inputimage = document.getElementById('image-url');
const inputRating = document.getElementById('rating');
console.log(cancelAddMovieButton);
const movies = [];

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
    clearMovieInput();
}

openAddMovieButton.addEventListener('click', toggleMovieModal);
backDrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
addMovieButton.addEventListener('click', addMovieHandler);
