function getRandomElement(array) {
  const randonIndex = Math.floor(Math.random() * words.length);
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
