// Using Map
const groupByProperty = (students) => {
  const studentsMap = new Map();

  for (let student of students) {
    const grade = student.grade;

    if (studentsMap.has(grade)) {
      const combinedStudentData = [...studentsMap.get(grade), student];
      studentsMap.set(grade, combinedStudentData);
    } else {
      studentsMap.set(grade, [student]);
    }
  }

  return studentsMap;
};

// Using Object.groupBy
const groupByFunc = (students) => {
  const groupedObj = Object.groupBy(students, (student) => student.grade);

  return groupedObj;
};
const students = [
  { name: "Alice", grade: 10 },
  { name: "Bob", grade: 11 },
  { name: "Charlie", grade: 10 },
  { name: "David", grade: 9 },
  { name: "Eve", grade: 11 },
];

console.log(groupByProperty(students));
// console.log(groupByFunc(students));
