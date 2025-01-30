let sum = +prompt("Укажите первоначльную сумму", 1000);
const percent = 15;
const result = 2000;
let count = 0;
const depositTerm = +prompt("Укажите срок депозита", 10);
while (count < depositTerm) {
  sum = sum + sum * (percent / 100);
  count = count + 1;
  document.write(count + ": " + sum + "<br>");
}
