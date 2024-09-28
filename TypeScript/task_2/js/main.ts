interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
    toString(): string {
        return "Director"
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }

    toString(): string {
        return "Teacher";
    }
}

// Creating a function for either instance of above classes
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    } else {
        return new Director;
    }
}

// Type predicate to check if the emplyee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
 }

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
         console.log(employee.workTeacherTasks());
    }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}

// Example usage:
const director = createEmployee(200);
const teacher = createEmployee(1000);

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

console.log(createEmployee(200).toString());
console.log(createEmployee(1000).toString());
console.log(createEmployee('$500').toString());

console.log(teachClass('Math'));
console.log(teachClass('History'));
