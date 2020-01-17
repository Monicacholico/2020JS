const addMovie = document.querySelector('header > button');
const modalAddMovie = document.getElementById('add-modal');
console.log(modalAddMovie);
addMovie.addEventListener('click', function(){
    modalAddMovie.classList.add('modal__content');
})
