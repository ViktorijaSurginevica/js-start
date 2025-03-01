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
  checkstatus: function () {
    console.log(`Счастье: ${pet.happiness}, Голод: ${pet.hunger}`);
  },
  feedPet: function (foodQuantity) {
    pet.hunger = pet.hunger - foodQuantity;
    if (pet.hunger < 0) {
      pet.hunger = 0;
    }
    console.log("Питомец покормлен!");
  },
  playWithPet: function () {
    pet.happiness = pet.happiness + 10;
    if (pet.happiness > 100) {
      pet.happiness = 100;
    }
    console.log("Питомец счастлив!");
  },
};
pet.sayHi();
pet.checkstatus();
pet.feedPet(30);
pet.checkstatus();
pet.playWithPet();
