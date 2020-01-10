
const sayHello = name => {
    console.log('Hi ' + name);
  }
  
  sayHello();

  const sayHellov1 = name => 'Hello ' + name; 

  const default_greeting = "Hello, there!"
  const sayHello2 = (name, greeting = default_greeting) => {
    console.log( greeting + name);
  }

  sayHello2();

  const sayHello3 = () => console.log('Hello there!');

  sayHello3();



  const checkInput1 = (first, ...args) => args === " " ? "I don't like empty strings" : 'Well Done';


  function checkInput(first, ...args){
    let hasEmptyText = false;
    for(const arg of args) {
      if(!arg){
        hasEmptyText = true;
        break;
      }
    }
    if(!hasEmptyText) {
      first();
    }
  }
  checkInput(() => {
    console.log('all not empty')}, 'Hello', 'Dear', 'hi', 'what?'
  );