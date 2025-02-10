function calculateAverage(scores) {
  let sum = 0; // Инициализируем переменную для суммы оценок

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i]; // Добавляем каждую оценку к сумме
  }

  // Возвращаем средний балл округленный до ближайшего целого
  return Math.round(sum / scores.length);
}
