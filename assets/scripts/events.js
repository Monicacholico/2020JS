const buttons = document.querySelectorAll('button');

// button.onclick = function() {
   
// };

const buttonClickHandler = (e) => {
e.target.disabled = true
console.log(e.target);
} 

const anotherButtonClicked = () => {
    console.log('This was clicked');
}
// button.onclick = buttonClickHandler;

// button.addEventListener('click', buttonClickHandler);


buttons.forEach(btn => {
    btn.addEventListener('click', buttonClickHandler);
})

// setTimeout(() => {
//     button.removeEventListener('click',buttonClickHandler);
// }, 2000);

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', boundFn);

// setTimeout(() => {
//     button.removeEventListener('click', boundFn);
// }, 2000);