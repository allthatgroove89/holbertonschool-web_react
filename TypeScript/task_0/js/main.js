var student1 = {
    firstName: 'Saul',
    lastName: 'Vera',
    age: 35,
    location: 'Bayamon'
};
var student2 = {
    firstName: 'Sergio',
    lastName: 'Vera',
    age: 35,
    location: 'Camuy'
};
// Storing variables student 1 & 2 in an array studentsList
var studentsList = [student1, student2];
// Function to redner a table
function renderTable(students) {
    // Creating table
    var table = document.createElement('table');
    // Create and append the table header
    var headerRow = table.insertRow();
    var headerCell1 = headerRow.insertCell();
    headerCell1.textContent = 'First Name';
    var headerCell2 = headerRow.insertCell();
    headerCell2.textContent = 'Location';
    students.forEach(function (student) {
        var row = table.insertRow();
        var cell1 = row.insertCell();
        cell1.textContent = student.firstName;
        var cell2 = row.insertCell();
        cell2.textContent = student.location;
    });
    // Append the table to the body
    document.body.appendChild(table);
}
renderTable(studentsList);
