const task3Element = document.getElementById('task-3');

function greeting(){
    alert('Hello World')
}
greeting();

function secondGreeting(name){
    alert(`Hello World ${name}`);
}
secondGreeting('Monica');

task3Element.addEventListener('click', greeting);

function threeElements(a,b,c){
    alert(`The ${a}, was ${b} in the ${c}`);
}
threeElements('cat', 'running', 'woods');