function Animal(name) {
    this.name = name;
  }
  
  // Add a method to Animal's prototype
  Animal.prototype.walk = function () {
    console.log(this.name + " is walking");
  };
  
  function Rabbit(name, color) {
    Animal.call(this, name); // Inherit name from Animal
    this.color = color;
  }
  
  // Inherit methods from Animal
  Rabbit.prototype = Object.create(Animal.prototype);
  
  // Fix the constructor (important step)
  Rabbit.prototype.constructor = Rabbit;
  
  // Add a new method to Rabbit
  Rabbit.prototype.jump = function () {
    console.log(this.name + " is jumping");
  };
  
  // Create an object of Rabbit
  let rabbit1 = new Rabbit("Bunny", "white");
  
  rabbit1.walk(); // Inherited from Animal
  rabbit1.jump(); // Own method 
  