var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    Director.prototype.toString = function () {
        return "Director";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    Teacher.prototype.toString = function () {
        return "Teacher";
    };
    return Teacher;
}());
// Creating a function for either instance of above classes
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    }
    else {
        return new Director;
    }
}
// Type predicate to check if the emplyee is a Director
function isDirector(employee) {
    return employee instanceof Director;
}
// Function to execute work based on employee type
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else {
        return 'Teaching History';
    }
}
// Example usage:
var director = createEmployee(200);
var teacher = createEmployee(1000);
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
console.log(createEmployee(200).toString());
console.log(createEmployee(1000).toString());
console.log(createEmployee('$500').toString());
console.log(teachClass('Math'));
console.log(teachClass('History'));
