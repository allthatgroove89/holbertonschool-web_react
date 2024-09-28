interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

interface Teacher {
    readonly firstName: string; // can only be set during initialization
    readonly lastName: string;  // can only be set during initialization
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // optional property
    location: string;
    [key: string]: any; // Allows adding additional properties
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implementing pintTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// Create instances of the Teacher interface
const teacher1: Teacher = {
    firstName: 'Heyzel',
    lastName: 'Rosa',
    fullTimeEmployee: true,
    location: 'Bayamon',
    subject: 'Human Resource', // Additional property
};

const teacher2: Teacher = {
    firstName: 'Astrid',
    lastName: 'Viera',
    fullTimeEmployee: false,
    location: 'Camuy',
};

const director1: Directors = {
    firstName: 'Saul',
    lastName: 'Vera',
    location: 'San Juan',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(teacher1);
console.log(teacher2);
console.log(director1);