function getTopStudents(studentsArray1, studentsArray2) { 
  const allStudents = [...studentsArray1, ...studentsArray2]

  const sortedStudents = sortStudentsByGpa(allStudents)

  if (sortedStudents.length < 6) return sortedStudents

  const highestGpaStudents = sortedStudents.slice(0, 5)
  
  for (let i = 5; i < sortedStudents.length; i++) {
    console.log()
    if (sortedStudents[i].gpa === highestGpaStudents[4].gpa) {
      highestGpaStudents.push(sortedStudents[i])
    } else {
      break;
    }
  }

  return highestGpaStudents
}

function sortStudentsByGpa(students) {
  return students.sort((stuA, stuB) => stuB.gpa - stuA.gpa)
}