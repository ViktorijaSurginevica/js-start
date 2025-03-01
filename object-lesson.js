let cat = {
  name: "Sherry",
  sex: "female",
  age: 3,
  high: 50,
  length: 100,
  hobby: "sleep",
};

console.log(cat);

console.log(cat.name);

cat.high = 66;
console.log(cat);

delete cat.length;
console.log(cat);

console.log(Object.keys(cat));
console.log(Object.values(cat));
console.log(cat.hasOwnProperty('name'));

// Дайте имя вашему виртуальному питомцу
let name = 'Strider'
// Состояние питомца
let happiness = 50
let hunger = 50


