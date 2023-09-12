export default function getStudentIdsSum(studentsList) {
  const sum = studentsList.reduce((accumulation, student) => accumulation + student.id, 0);
  return sum;
}
