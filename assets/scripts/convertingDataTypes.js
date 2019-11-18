const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const description = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, description);
}

function substract(){
    
}

addBtn.addEventListener('click', add);
