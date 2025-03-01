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
pet.checkstatus();

const newPet = {
  name: "Spike",
  happiness: 80,
  hunger: 30,
  sayHi: function () {
    //метод объекта
    console.log("Meow!");
  },
  checkstatus: function () {
    console.log(`Счастье: ${newPet.happiness}, Голод: ${newPet.hunger}`);
  },
  feedPet: function (foodQuantity) {
    newPet.hunger = newPet.hunger - foodQuantity;
    if (newPet.hunger < 0) {
      newPet.hunger = 0;
    }
    console.log("Питомец покормлен!");
  },
  playWithPet: function () {
    newPet.happiness = newPet.happiness + 10;
    if (newPet.happiness > 100) {
      newPet.happiness = 100;
    }
    console.log("Питомец счастлив!");
  },
};

class Pet {
  constructor(name, happiness, hunger) {
    //const this = {};
    this.name = name;
    this.happiness = happiness;
    this.hunger = hunger;
  }

  sayHi() {
    //метод объекта
    console.log("Meow!");
  }
  checkstatus() {
    console.log(`Счастье: ${this.happiness}, Голод: ${this.hunger}`);
  }
  feedPet(foodQuantity) {
    this.hunger = this.hunger - foodQuantity;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
    console.log("Питомец покормлен!");
  }
  playWithPet() {
    this.happiness = this.happiness + 10;
    if (this.happiness > 100) {
      this.happiness = 100;
    }
    console.log("Питомец счастлив!");
  }
}

const nextPet = new Pet("Bobik", 100, 0);
const vikaPet = new Pet("Shery", 100, 0);
vikaPet.checkstatus();
vikaPet.feedPet(80);
vikaPet.checkstatus();
// const beer = new Object();
// const arr = new Array(1, 2, 3, 4, 5);
// console.log(arr);
