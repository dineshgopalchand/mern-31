class Car {
  constructor(carName, brand, year) {
    this.name = carName;
    this.brand = brand;
    this.year = year;
  }
  fullDetail(){
    return `${this.brand} ${this.name} - ${this.year}`
  }
}

const carObj1 = new Car("Hector", "MG", 2018);
const carObj2 = new Car("Baleno", "Maruti", 2017);
console.log(carObj1.name);
console.log(carObj1.brand);
console.log(carObj2.year);

console.log(carObj2.name);
const obj2Details=carObj2.fullDetail();
console.log(obj2Details);
const obj1Details=carObj1.fullDetail();
console.log(obj1Details);
