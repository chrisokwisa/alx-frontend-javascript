export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const students = listStudents.filter((student) => student.location === city);
  for (const student of students) {
    student.grade = 'N/A';
  }
  const newStudents = students.map((students) => {
    const single = student;
    for (const grade of newGrades) {
      if (single.id === grade.students.Id) {
         single.grade = grade.grade;
      }
    }
    return single;
  });
  return newStudents;
}
