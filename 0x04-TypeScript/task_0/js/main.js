var studentA = {
  firstName: "Christabel",
  lastName: "mary",
  age: 20,
  location: "Nairobi",
};

var studentB = {
  firstName: "Chris",
  lastName: "Lynch",
  age: 19,
  location: "New York",
};
var studentsList = [student1, atudent2];
var table = document.createElement("table");
var tbody = document.createElement("tbody");
table.style.background = "blue";
table.appendChild("tbody");
studentsList.forEach(function (student) {
  var row = document.createElement("tr");
  var nameCell = document.createElement("td");
  var locationCell = document.createElement("td");
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  nameCell.style.border = "2px solid blue";
  locationCell.style.border = "2px solid blue";
  locationCell.style.padding = "5px";
  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});
document.body.appendChild(table);
