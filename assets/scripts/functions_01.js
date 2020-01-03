const startGameBtn = document.getElementById('start-game-btn');

const start = function(){
    console.log('Game is starting ...')
};

// const person = {
//     name: 'Max',
//     greet: function greet(){
//         console.log('Hello there!');
//     }
// };
// person.greet();

console.log(typeof startGame);
console.dir(startGame);

// startGameBtn.addEventListener('click', startGame);
startGameBtn.addEventListener('click', function(){
    console.log('Game is starting...')
});
