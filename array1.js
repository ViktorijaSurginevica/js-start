// const students = ["Tom", "Mark", "Alfa", "Braun"];
// students[7] = "Mike";
// const result = students.reverse();
// // students.reverse()
// console.log(students);
// console.log(result);
// console.log(students === result);

const scores = [
  20, 98, 15, 20, 48, 75, 54, 25, 61, 47, 52, 14, 98, 14, 75, 25, 65, 95, 14,
  15, 28, 24, 98,
];

// let i = 0;
// let output;
// let highScore = 0;

// // while (i < scores.length) {
// //   output = "Bubble solution #" + i + " score: " + scores[i];
// //   console.log(output);
// //   i = i + 1;
// // }

// for (let i = 0; i < scores.length; i++) {
//   output = "Bubble solution #" + i + " score: " + scores[i];
//   console.log(output);
//   if (highScore < scores[i]) {
//     highScore = scores[i];
//   }
// }

console.log("Bubbles tests: " + scores.length);
console.log(scores.length);
console.log("Highest bubble score: " + highScore);

const bestSolution = [];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === highScore) {
    bestSolution.push(i);
  }
}

console.log("Solutions with highest score:" + bestSolution);

const highScore = printAddGetHighScore;

function printAddGetHighScore(array) {
  let output;
  let highScore = 0;
  for (let i = 0; i < array.length; i++) {
    output = "Bubble solution #" + i + " score: " + array[i];
    console.log(output);
    if (highScore < array[i]) {
      highScore = array[i];
    }
  }
  return highScore;
}
