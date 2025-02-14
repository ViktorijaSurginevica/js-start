let gold = 100;
const buildingName = "Tower";
const buildingPrice = 30;

if (gold >= buildingPrice) {
  gold = gold - buildingPrice;
  console.log(`$(buildingName): work complete`);
} else {
  console.log(`$(buildingName): need more gold!`);
}

buildingName = "Garage";
buildingPrice = 5;

if (gold >= buildingPrice) {
  gold = gold - buildingPrice;
  console.log(`$(buildingName): work complete`);
} else {
  console.log(`$(buildingName): need more gold!`);
}

console.log("Gold rest: $(gold)");
