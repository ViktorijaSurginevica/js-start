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

function increaseResource(currentAmount, increment = 10) {
  // Создаем локальную переменную для нового количества ресурсов
  const newAmount = currentAmount + increment;

  return newAmount;
}

// Она недоступна за пределами функции
console.log(newAmount) // ReferenceError: newAmount is not defined



// let resource = 'lumber'
 
// manageResources()
 
// function manageResources() {
//   let resource = 'crystals'
//   if (true) {
//     let resource = 'stone'
//     console.log(resource) // Вывод 1
//   }
//   console.log(resource) // Вывод 2
// }
 
// console.log(resource) // Вывод 3
 
// if (true) {
//   resource = 'gold'
//   console.log(resource) // Вывод 4
// }
// console.log(resource) // Вывод 5