const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const description = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, description);
}

function writeToLog(
  operationIdentifier,
  prevResult, 
  enteredNumber, 
  currentResult
   ){
    const logEntry = {
      operation: operationIdentifier,
      prevResult : prevResult,
      number: enteredNumber,
      result: currentResult
    };
    logEntries.push(logEntry);
    console.log(typeof(logEntry));
}


// function calculateResult(calculationType){
//   if (
//     calculationType !== 'ADD'  &&
//     calculationType !== 'SUBTRACT' &&
//     calculationType !== 'MULTIPLY' &&
//     calculationType !== 'DIVIDE' ||
//     !enteredNumber
//       ) {
//     return;
//   }

//   // if (
//   //   calculationType === 'ADD' ||
//   //   calculationType === 'SUBTRACT' ||
//   //   calculationType === 'MULTIPLY' ||
//   //   calculationType === 'DIVIDE'
//   // ){}

//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   let mathOperator;
//   if (calculationType === 'ADD'){
//     currentResult += enteredNumber;
//     mathOperator = '+';
//   } else if(calculationType === 'SUBTRACT') {
//     currentResult -= enteredNumber;
//     mathOperator = '-';
//   } else if (calculationType === 'MULTIPLY') {
//     currentResult *= enteredNumber;
//     mathOperator = '*';
//   } else if (calculationType === 'DIVIDE') {
//     currentResult /= enteredNumber;
//     mathOperator = '/';
//   }
//   createAndWriteOutput(mathOperator, initialResult, enteredNumber);
//   writeToLog(calculationType, initialResult, enteredNumber, currentResult);
// }

function add() {
  calculateResult('ADD');
}

function subtract(){ 
  calculateResult('SUBTRACT');

}

function multiply(){
  calculateResult('MULTIPLY');

}

function divide(){
    calculateResult('DIVIDE');
}

function calculate(calculationType){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    if (calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
      } else if(calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
      } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
      } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
      }
      createAndWriteOutput(mathOperator, initialResult, enteredNumber);
      writeToLog(calculationType, initialResult, enteredNumber, currentResult);
    }

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT' ));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY' ));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE' ));
