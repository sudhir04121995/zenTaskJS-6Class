class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
    }
}


const person1 = new Person("sudhir", 28, "kulithalai");
const person2 = new Person("mathan", 32, "kulithalai");

person1.displayInfo();

person2.displayInfo();




class UberPriceCalculator {
    constructor(distance, duration) {
      this.baseFare = 150;
      this.costPerKilometer = 10;
      this.costPerMinute = 2;
      this.distance = distance;
      this.duration = duration;
    }
  
    calculatePrice() {
      const totalFare = this.baseFare + (this.distance * this.costPerKilometer) + (this.duration * this.costPerMinute);
      return totalFare;
    }
  }
  
  
  const distance = 10; 
  const duration = 20;
  

  const uberCalculator = new UberPriceCalculator(distance, duration);
  

  const price = uberCalculator.calculatePrice();
  console.log(`The estimated Uber price for a ${distance}-km trip taking ${duration} minutes is ₹${price.toFixed(2)}`);
  