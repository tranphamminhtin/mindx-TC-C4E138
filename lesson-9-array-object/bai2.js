/*
2.
const student = {
    firstName: "a",
    lastName: "b",
    age: 10,
    scores: [
            {subject: "Toán", score: 10},
            {subject: "Văn", score: 6},
            {subject: "Tin", score: 9},
            {subject: "Hóa", score: 5}
        ]
}

a. show ra họ và tên
b. show ra tuổi
c. student học bao nhiêu môn
d. tìm môn có điểm nhỏ hơn 8
e. thêm môn Lý với điểm là 8 ở cuối cùng

homework
f. tính điểm trung bình
*/

const studentA = {
  firstName: "a",
  lastName: "b",
  age: 10,
  scores: [
    { subject: "Toán", score: 10 },
    { subject: "Văn", score: 6 },
    { subject: "Tin", score: 9 },
    { subject: "Hóa", score: 5 },
  ],
};
// a. show ra họ và tên
function getFullName(student) {
  return student.firstName + " " + student.lastName;
}
console.log("getFullName", getFullName(studentA));

// b. show ra tuổi
function getAge(student) {
  return student.age;
}
console.log("getAge", getAge(studentA));

// c. student học bao nhiêu môn
function getNumberOfSubjects(student) {
  const scores = student.scores; // lấy cái mảng scores ra gán cho biến scores
  return scores.length;
}
console.log("getNumberOfSubjects", getNumberOfSubjects(studentA));

// d. tìm môn có điểm nhỏ hơn 8
function getScoresLessThan8(student) {
  // scores1 = [
  //     { subject: "Toán", score: 10 },
  //     { subject: "Văn", score: 6 },
  //     { subject: "Tin", score: 9 },
  //     { subject: "Hóa", score: 5 },
  //   ],
  // scores = [10, 6, 9, 5];
  // scores1[0].score === 10
  // scores1[1].score === 6
  // scores1[2].score === 9
  //   const scores = [10, 6, 9, 5];
  const scores = student.scores;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i].score < 8) {
      console.log(scores[i]);
    }
  }
}
console.log("getScoresLessThan8", getScoresLessThan8(studentA));

// e. thêm môn Lý với điểm là 8 ở cuối cùng
function addScores(student) {
  const scores = student.scores;
  // a = [1,2,3];
  // a.push(4)
  scores.push({ subject: "Lý", score: 8 });
}
addScores(studentA);
console.log("add scores", studentA);
