import listOfStudents from "./9-hoisting.js";

console.log("student list:")
console.log(listOfStudents);
console.log("End");

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)