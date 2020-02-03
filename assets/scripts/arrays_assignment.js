const arrayNumbers = [5, 10, 15, 20, 25];

const highNumbers = arrayNumbers.filter((number)=> number > 5);

// highNumbers.push(30);

console.log(highNumbers, arrayNumbers);

const numbersObject = arrayNumbers.map((number, idx) => {
    const newObj = {cost: number, folio: idx};
    console.log(newObj);
})