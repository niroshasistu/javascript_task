// Student object
const student = {
  name: "Nirosha",
  rollNo: 101,
  marks: 82,
  subjectCode: 2
};

// Function to select subject
function getSubject(code) {
  switch (code) {
    case 1:
      return "Mathematics";
    case 2:
      return "Computer Science";
    case 3:
      return "Physics";
    default:
      return "Unknown Subject";
  }
}

// Function to calculate grade
function calculateGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 75) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else {
    return "Fail";
  }
}

// Event simulation using function call
function evaluateStudent() {
  const subject = getSubject(student.subjectCode);
  const grade = calculateGrade(student.marks);

  console.log("Student Name:", student.name);
  console.log("Roll No:", student.rollNo);
  console.log("Subject:", subject);
  console.log("Marks:", student.marks);
  console.log("Grade:", grade);
}

// Simulate event
evaluateStudent();
// output
// Student Name: Nirosha
// Roll No: 101
// Subject: Computer Science
// Marks: 82
// Grade: B