function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}

function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}

let scooter = new Scooter(1945, 'blue', 'flyer');
let driver = new Driver('will', 43, 'intermediate');
let pickup = new PickupLocation('12 broad street', 'new york');
