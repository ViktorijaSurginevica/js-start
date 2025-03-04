// Задача:
// Создайте объект car, который будет содержать следующие свойства:

// brand (марка автомобиля)
// model (модель автомобиля)
// year (год выпуска)
// mileage (пробег)
// Также добавьте метод getCarInfo, который будет возвращать строку с полной информацией о автомобиле в формате:

// "Марка: [brand], Модель: [model], Год: [year], Пробег: [mileage] км"

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  mileage: 15000,

  getCarInfo: function () {
    return `Марка: ${this.brand}, Модель: ${this.model}, Год: ${this.year}, Пробег: ${this.mileage} км`;
  },
};

// Вывод информации о автомобиле
console.log(car.getCarInfo());
