const customers = ['Max', 'Manuel','Anna'];
const activeCustomers = ['Max', 'Manuel'];

let inactiveCustomers = []



    
// inactiveCustomers = customers.filter(function(customer){
//         return activeCustomers.indexOf(customer) == -1;
//     });

inactiveCustomers = customers.filter(customer => activeCustomers.indexOf(customer) == -1); 
console.log(inactiveCustomers);