export default function getStudentsIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
