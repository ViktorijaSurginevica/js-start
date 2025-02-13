function makePhrases() {
  const words1 = ["Кошка", "Мышка", "Собака"];
  const words2 = ["нюхала", "курила", "жевала"];
  const words3 = ["сыр", "морковка", "макароны"];

  const randomIndex1 = Math.floor(Math.random() * words1.length);
  const randomIndex2 = Math.floor(Math.random() * words2.length);
  const randomIndex3 = Math.floor(Math.random() * words3.length);

  const phrase =
    words1[randomIndex1] +
    " " +
    words2[randomIndex2] +
    " " +
    words3[randomIndex3];

  return phrase;
}
const result = makePhrases();

alert(result);

console.log(result);

