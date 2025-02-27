function calculateAverage(scores) {
    let sum = 0 // Инициализируем переменную для суммы оценок
 
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i] // Добавляем каждую оценку к сумме
    }
 
    // Возвращаем средний балл округленный до ближайшего целого
    return Math.round(sum / scores.length)
}

const myScores = [82, 75, 91, 85, 93, 88, 99]
 
const average = calculateAverage(myScores)
console.log(`Средний балл студента: ${average}`) // Выведет средний балл