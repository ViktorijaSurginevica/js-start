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

//позиция коробля
const randomLoc = Math.floor(Math.random() * 5); // от 0 и до 4
const location1 = randomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;

//потоплен или нет
let isSunk = false;
//предпологаемая позиция коробля ("выстрел)")
let guess;
// добавляем счетчик попаданий
let hits = 0;
// создаем счетчик выстрелов
let guesses = 0;

while (isSunk === false) {
  // не забываем преврать строку в число
  guess = +prompt("Fire! Enter a number 0-6");
  if (guess < 0 || guess > 6) {
    alert("Please, enter a valid cell number!");
  } else {
    // увеличиваем счетчик выстрелов
    guesses = guesses + 1;
    // логическое "или"
    if (guess === location1 || guess === location2 || guess === location3) {
      alert("HIT!");
      // считаем попадания
      hits = hits + 1;
      // если подбили
      if (hits === 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}

const stats = "You have " + hits + " hits out of " + guesses + " shots.";
alert(stats);
