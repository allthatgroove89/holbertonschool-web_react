var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Implementing pintTeacher function
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
// Create instances of the Teacher interface
var teacher1 = {
    firstName: 'Heyzel',
    lastName: 'Rosa',
    fullTimeEmployee: true,
    location: 'Bayamon',
    subject: 'Human Resource'
};
var teacher2 = {
    firstName: 'Astrid',
    lastName: 'Viera',
    fullTimeEmployee: false,
    location: 'Camuy'
};
var director1 = {
    firstName: 'Saul',
    lastName: 'Vera',
    location: 'San Juan',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(teacher1);
console.log(teacher2);
console.log(director1);
