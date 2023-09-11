export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const studentsIds = studentList.map((student) => student.id);
  return studentsIds;
}
