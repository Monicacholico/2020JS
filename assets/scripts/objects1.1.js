const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const addMovieHandler = () => {
    const title= document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (
        title.trim() === '' ||
        extraName.trim() === '' ||
        exttraValue.trime() === '' 
        ){
            return;
        }
        const newMovie = {
            info: {
                title,
                extraName
            }
        }
}