function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function makePhrases() {
  const words1 = ["Кошка", "Мышка", "Собака"];
  const words2 = ["нюхала", "курила", "жевала"];
  const words3 = ["сыр", "морковка", "макароны"];

  const phrase =
    getRandomElement(words1) +
    " " +
    getRandomElement(words2) +
    " " +
    getRandomElement(words3);

  return phrase;
}
const result = makePhrases();

alert(result);
// alert(makePhrases());

console.log(result);
