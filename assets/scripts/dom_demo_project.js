const openAddMovieButton = document.querySelector('header > button');
const modalAddMovie = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const cancelAddMovieButton = document.getElementById('notAddMovie');
const addMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = modalAddMovie.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal')

const movies = [];

const toggleBackDrop = () => {
    backDrop.classList.toggle('visible');
}

const updateUI = () => {
    if(movies.length === 0){
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};


const cancelMovieDeletion = () => {
    toggleBackDrop();
    deleteMovieModal.classList.remove('visible');
}


const deleteMovie = movieId => {
    let movieIndex = 0;
    for(const movie of movies) {
        if(movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    // listRoot.removeChild(listRoot.children[movieIndex]);
    cancelMovieDeletion();
    updateUI();
}
const deleteMovieHandler = movieId =>  {
    deleteMovieModal.classList.add('visible');
    toggleBackDrop();

    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
    
    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');


    cancelDeletionButton.removeEventListener('click', cancelMovieDeletion);
    
    cancelDeletionButton.addEventListener('click', cancelMovieDeletion);
    confirmDeletionButton.addEventListener('click', deleteMovie.bind(null, movieId));
    // deleteMovie(movieId);

};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
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
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}




const closeMovieModal = () => {
    modalAddMovie.classList.remove('visible');
};

const showMovieModal = () => {
    modalAddMovie.classList.add('visible');
    toggleBackDrop();
};


const cancelAddMovieHandler = () => {
    clearMovieInputs();
    closeMovieModal();
    toggleBackDrop();
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
    const inputPassed = true;
    const titleValue = userInputs[0].value;
    const imageUrl = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    if(titleValue.trim() === '' || imageUrl.trim() === ''
    || ratingValue.trim() === ''|| ratingValue < 1 || ratingValue > 5){
        alert('Please enter valid values!');
        inputPassed = false;
    }
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrl,
        rating: ratingValue
    };
    if(inputPassed) {
        movies.push(newMovie);
        console.log(movies);
        closeMovieModal();
        toggleBackDrop();
        clearMovieInputs();
        renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
        updateUI();
    }
}

const backdropClickHandler = () => {
    closeMovieModal();
    cancelMovieDeletion();
    clearMovieInputs();
} 
openAddMovieButton.addEventListener('click', showMovieModal);
backDrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
addMovieButton.addEventListener('click', addMovieHandler);
