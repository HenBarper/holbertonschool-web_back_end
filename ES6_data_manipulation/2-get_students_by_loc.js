export default function getStudentsByLocation(studentList, city) {
  const studentsFromCity = studentList.filter((student) => student.location === city);
  return studentsFromCity;
}
