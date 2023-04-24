console.log("from object.js file");
const car = {
  name: "Nexon",
  brand: "Tata",
  build: 2021,
  fullname: function () {
    console.log(this);
    return "something";
  },
  fullname1: () => {
    console.log(this);
    return "something1";
  },
};
console.log(car["name"]);
console.log(car.name);
console.log(car.brand);
console.log(car.fullname());
console.log(car.fullname1());
// console.log(car.fullname());
// console.log(car['fullname']());

console.log('------------------------------------------');
const person={
    name:'dinesh',
    location:'blr',
    car: {
        name: "Nexon",
        brand: "Tata",
        build: 2021,
        carname: function () {
          console.log(this);
          return "carname";
        },
        carname1: () => {
          console.log(this);
          return "carname1";
        },
      }
}
console.log(person.car.carname1())
console.log(person.car.brand)
console.log(person['car']['brand'])
