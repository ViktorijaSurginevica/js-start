// let gold = 100
// let  = 'Tower'
// let costGold = buildingName30

// if (gold >= costGold) {
//     gold -= costGold // то же, что gold = gold - costGold
//     console.log(`${buildingName}: work complete!`);
// } else {
//     console.log(`${buildingName}: not enough resources!`);
// }

// buildingName = "Garage";
// costGold = 5;

// console.log("Gold rest: $(gold)");

function createBuilding(buildingName, costGold) {
  // Создаем переменную для проверки количества ресурса
  const hasEnoughGold = gold >= costGold
 
  if (hasEnoughGold) {
      gold -= costGold
      console.log(`${buildingName}: work complete!`)
  } else {
      console.log(`${buildingName}: not enough resources!`)
  }
}


// Функция для увеличения ресурсов
function increaseResource(currentAmount, increment) {
  return currentAmount + increment
}

// Увеличение золота
gold = increaseResource(gold, 50)
console.log(`New amount of gold: ${gold}`)

// Вызов функции без второго параметра
gold = increaseResource(gold)
console.log('New amount of gold: ' + gold) // New amount of gold: 80
 
// Вызов функции с параметром
gold = increaseResource(gold, 100)
console.log('New amount of gold: ' + gold) // New amount of gold: 180

