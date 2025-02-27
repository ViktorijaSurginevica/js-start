const car = {
  color: "yellow",
  passenger: 2,
  mileage: 2000,
};

if (car.mileage < 50000) {
  alert("Buy it!");
} else {
  alert("Forget about it!"); // Added quotes here
}

let payment = 50;

let sallary = payment;

payment = payment + 5;

console.log(payment);
console.log(sallary);
