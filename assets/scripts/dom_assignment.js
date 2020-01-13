const first = document.getElementById('task-1');
// first.setAttribute('style', 'background-color: black; color: white;')
first.style.backgroundColor = 'black';
first.style.color = 'white';


const winTitle = document.title;
document.title = 'Assignment - Solved';

const title = document.querySelector('h1');
// title.innerText = 'Asignment - Solved';
const body = document.body;
body.querySelector('h1').innerHTML = 'Assignment - Solved again';
