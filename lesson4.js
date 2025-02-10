scores.push(100);
console.log(scores); // [82, 75, 91, 85, 93, 88, 99, 100]
console.log(scores.length); // 8

 
// [82, 75, 91, 85, 93, 88, 99, 100]
 
console.log(scores.indexOf(93)) // 4
console.log(scores.indexOf(101)) // -1

// [82, 75, 91, 85, 93, 88, 99, 100]
 
scores.splice(2, 3) // Удаляем три элемента, начиная с индекса 2
console.log(scores) // [82, 75, 88, 99, 100]

// [82, 75, 88, 99, 100]
 
scores.splice(3, 0, 77)
console.log(scores) // [82, 75, 88, 77, 99, 100]

// [82, 75, 88, 77, 99, 100]
 
scores.splice(1, 1, 50)
console.log(scores) // [82, 50, 88, 77, 99, 100]
