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
    // curEmployee: 0,
    employees: ['Max', 'Manu', 'Anna'],
    // next() {
    //     const returnValue = { 
    //         value: this.employees[this.curEmployee], 
    //         done: false};
    //     this.curEmployee++;
    //     return returnValue;
    // },
    // getEmployee: function* employeeGenerator() {
    [Symbol.iterator]: function* employeeGenerator() {
        // let employee = company.next();

        // while(!employee.done) {
        //     yield employee.value;
        //     employee = company.next();
        // }
        let currentEmployee = 0;
        while (currentEmployee < this.employees.length){
            yield this.employees[currentEmployee];
            currentEmployee++;
        }
    }
};

// let employee = company.next();

// while(!employee.done) {
//     console.log(employee.value);
//     employee = company.next();
// }

for (const employee of company) {
    console.log(employee);
}

console.log([...company]);

// const it = company.getEmployee();

// console.log(it.nex());
// console.log(it.nex());
// console.log(it.nex());
// console.log(it.nex());
// console.log(it.nex());

// Reflect API

const course = {
    title: 'Javascript - The Complete Guide'
};

Reflect.setPrototypeOf(course, {toString() {
    return this.title;
}
});

//Reflect.deleteProperty(course, 'title');

// Object.deleteProperty(course, 'title'); It won't work 'cause Object doesn't have this delete feature

// delete course.title;

console.log(course.toString());

// Proxy API

const courseHandler = {
    get(obj, propertyName) {
        console.log(propertyName);
        if(propertyName === 'length') {
            return 0;
        }
        return obj[propertyName] || 'NOT FOUND';
    },
    set(obj, propertyName, newValue) {
        console.log('Sending data ...');
        if(propertyName === 'rating') {
            return;
        }
        obj[propertyName] = newValue;
    }
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;
console.log(pCourse.title, pCourse.length);
