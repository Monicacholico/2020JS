// Library Land

const uid = Symbol('uid');
console.log(uid);

const user = {
    // id: 'p1',
    [uid]: 'p1',
    name: 'Max',
    age: 30,
    [Symbol.toStringTag]: 'User'
};

user[uid] = 'p3';

// app land => Using the library

user.id = 'p2'; //this should not be possible;

console.log(user[Symbol('uid')]);
console.log(Symbol('uid') === Symbol('uid'));
console.log(user.toString());

// iterators

const company = {
    curEmployee: 0,
    employees: ['Max', 'Manu', 'Anna'],
    next() {
        const returnValue = { 
            value: this.employees[this.curEmployee], 
            done: false};
        this.curEmployee++;
        return returnValue;
    },
    [Symbol.iterator]: function* employeeGenerator() {
        // let employee = company.next();

        // while(!employee.done) {
        //     yield employee.value;
        //     employee = company.next();
        // }
        const currentEmployee = 0;
        while (currentEmployee < this.employees.length){
            yield this.employees[currentEmployee];
        }
    }
};

// let employee = company.next();
// while(!employee.done) {
//     console.log(employee.value);
//     employee = company.next();
// }

// for(const employee of company) {
//     console.log(employee);
// }