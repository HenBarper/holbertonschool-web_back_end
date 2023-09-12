export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const studentsFromCity = studentsList.filter((student) => student.location === city);

  const studentsWithNewGrade = studentsFromCity.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);

    let grade;
    if (newGrade) {
      grade = newGrade.grade;
    } else {
      grade = 'N/A';
    }

    return { ...student, grade };
  });
  return studentsWithNewGrade;
}
