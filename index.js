// let sum = +prompt("Укажите первоначльную сумму", 1000);
// const percent = 15;
// const result = 2000;
// let count = 0;
// const depositTerm = +prompt("Укажите срок депозита", 10);
// while (count < depositTerm) {
//   sum = sum + sum * (percent / 100);
//   count = count + 1;
//   document.write(count + ": " + sum + "<br>");
// }

const location1 = 3;
const location2 = 4;
const location3 = 5;

let isSunk = false;
let guess;

while (isSunk === false) {
  guess =  +prompt("Fire! Enter a number 0-6")
  if(guess === location1 || guess === location2 || guess === location3)
}
