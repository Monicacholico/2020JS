const button = document.querySelector('button');

// button.onclick = function() {
   
// };

const buttonClickHandler = (e) => {
// e.target.disabled = true
console.log(e.target);
} 

const anotherButtonClicked = () => {
    console.log('This was clicked');
}
// button.onclick = buttonClickHandler;

// button.addEventListener('click', buttonClickHandler);


// buttons.forEach(btn => {
//     btn.addEventListener('mouseenter', buttonClickHandler);
// })

// window.addEventListener('scroll', event => {
//     console.log(event);
// })

// setTimeout(() => {
//     button.removeEventListener('click',buttonClickHandler);
// }, 2000);

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', boundFn);

// setTimeout(() => {
//     button.removeEventListener('click', boundFn);
// }, 2000);

// let curElementNumber = 0;
 
// function scrollHandler() {
//     const distanceToBottom = document.body.getBoundingClientRect().bottom;
 
//     if (distanceToBottom < document.documentElement.clientHeight + 150) {
//         const newDataElement = document.createElement('div');
//         curElementNumber++;
//         newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//         document.body.append(newDataElement);
//     }
// }
 
// window.addEventListener('scroll', scrollHandler);

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
})

const div = document.querySelector('div');

div.addEventListener('click', event => {
    console.log('clicked div');
    console.log(event);

}, true);

button.addEventListener('click', event => {
    event.stopPropagation(); // to stop events listeners en ancestors elements
    // event.stopImmediatePropagation(); to stop multiple event listeners on same element
    console.log('click button');
    console.log(event);
})