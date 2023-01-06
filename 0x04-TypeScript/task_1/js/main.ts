interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsofExperience?: number;
    location: string;
    contract: boolean;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberofReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomeWork(): string;
    displayName(): string;
}

const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName;
        this.lastName;
    }
    workOnHomeWork(): string {
        return "Currently Working";
    }
    displayName(): string {
        return this.firstName;
    }
};

export { printTeacher, StudentClass };