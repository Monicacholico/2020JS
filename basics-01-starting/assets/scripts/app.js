const defaultResult = 0;
let currentResult = defaultResult;

function add(a, b){
   const result = a + b;
   alert(result);
}
add(8,9);


currentResult = currentResult + 10;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 -1`;

outputResult(currentResult, calculationDescription);
