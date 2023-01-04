interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentA: Student = {
    firstName: "Christabel",
    lastName: "mary",
    age: 20,
    location: "Nairobi"
}

const studentB: Student = {
    firstName: "Chris",
    lastName: "Lynch",
    age: 19,
    location: "New York"
}

const studentsList: Student[] = [studentA, studentB];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "blue";
table.appendChild(tbody)

studentsList.forEach((student: Student): void => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    nameCell.style.border = "2px solid blue";
    locationCell.style.border = "2px solid blue";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

document.body.appendChild(table);