function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const words1 = ["Кошка", "Мышка", "Собака"];
const words2 = ["нюхала", "курила", "жевала"];
const words3 = ["сыр", "морковка", "макароны"];

function makePhrases(param1, param2, param3) {
  const phrase =
    getRandomElement(words1) +
    " " +
    getRandomElement(words2) +
    " " +
    getRandomElement(words3);

  return phrase;
}

alert(makePhrases(words1, words2, words3));

// const result = makePhrases();

// alert(result);
// // alert(makePhrases());

// console.log(result);
