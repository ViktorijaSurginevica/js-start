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
console.log(cat.hasOwnProperty("name"));

// Дайте имя вашему виртуальному питомцу
const pet = {
  name: "Strider",
  happiness: 50,
  hunger: 50,
  sayHi: function () {
    //метод объекта
    console.log("Meow!");
  },
};
pet.sayHi();
