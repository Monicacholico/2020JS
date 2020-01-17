const openAddMovieButton = document.querySelector('header > button');
const modalAddMovie = document.getElementById('add-modal');
console.log(modalAddMovie);

const toggleMovieModal = () => {
    modalAddMovie.classList.toggle('visible');
}

openAddMovieButton.addEventListener('click', toggleMovieModal)
