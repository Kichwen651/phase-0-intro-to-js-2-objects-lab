// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

let employee = {
    name: "Alice",
    age: 30,
    position: "Developer"
};

// Non-destructive update
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "age", 31);
console.log(updatedEmployee); // { name: "Alice", age: 31, position: "Developer" }
console.log(employee); // Original employee remains unchanged

// Destructive update
destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Senior Developer");
console.log(employee); // { name: "Alice", age: 31, position: "Senior Developer" }

// Non-destructive delete
let newEmployee = deleteFromEmployeeByKey(employee, "age");
console.log(newEmployee); // { name: "Alice", position: "Senior Developer" }
console.log(employee); // Original employee remains unchanged

// Destructive delete
destructivelyDeleteFromEmployeeByKey(employee, "position");
console.log(employee); // { name: "Alice", age: 31 }
