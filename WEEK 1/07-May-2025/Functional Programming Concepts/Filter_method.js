const students = [
  { name: "Love", score: 80 },
  { name: "Harsh", score: 65 },
  { name: "Jinendra", score: 90 },
  { name: "Keshav", score: 70 },
];

// Use filter to get students with scores above 75
const topStudents = students.filter((student) => student.score > 75);

console.log(topStudents);
