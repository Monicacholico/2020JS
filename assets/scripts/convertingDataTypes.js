const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const description = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, description);

}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
}

function substract(){ 
    const enteredNumber = getUserNumberInput();
    const description = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, description);
}

function multiply(){

}

function divide(){

}

addBtn.addEventListener('click', add);
