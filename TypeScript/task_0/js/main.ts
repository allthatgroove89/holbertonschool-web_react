interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Saul',
    lastName: 'Vera',
    age: 35,
    location: 'Bayamon'
}

const student2: Student = {
    firstName: 'Sergio',
    lastName: 'Vera',
    age: 35,
    location: 'Camuy'
}

// Storing variables student 1 & 2 in an array studentsList
const studentsList: Student[] = [student1, student2];

// Function to redner a table
function renderTable(students: Student[]): void {
    // Creating table
    const table = document.createElement('table');
    // Create and append the table header
    const headerRow = table.insertRow();
    const headerCell1 = headerRow.insertCell();
    headerCell1.textContent = 'First Name';
    const headerCell2 = headerRow.insertCell();
    headerCell2.textContent = 'Location';

    students.forEach(student => {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        cell1.textContent = student.firstName;
        const cell2 = row.insertCell();
        cell2.textContent = student.location;
    });

    // Append the table to the body
    document.body.appendChild(table);
}

renderTable(studentsList);
