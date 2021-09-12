class Pet {
  // Inside the constructor method is where we define class attributes.
  constructor(name, type, age) {
    this.petName = name;
    this.type = type;
    this.age = age;
    this.energyLevel = 10;
    this.hungerLevel = 0;
    this.personality = true;
  }

  // class method. notice how we access class attributes with this.classAttribute
  displayPetName() {
    console.log(`Pet name is ${this.petName}`);
  }

  makeSignatureSound() {
    if (this.type === "dog") {
      console.log("WOOF");
    } else if (this.type === "cat") {
      console.log("MEOW");
    } else {
      console.log("i dunno...");
    }
  }

  showPetStats() {
    console.log(
      `Name: ${this.petName} Type: ${this.type} Age: ${this.age} Hunger Level ${this.hungerLevel} `
    );
  }

  increaseHunger(amount) {
    this.hungerLevel += amount;
    this.showPetStats();
  }
}

// Class inheritance. Dog will have access to ALL properties of Pet class
class Dog extends Pet {
  constructor(dogName, dogAge) {
    // To access parent class properties, we MUST call super(), inside of super are the dynamic attributes
    // of the Pet class
    super(dogName, "dog", dogAge);
  }

  woof() {
    console.log("WOOF");
  }
}

// This is how we define an instance of a class
let dog1 = new Dog("Fluffy", 8);
dog1.woof();

// define instances of Pet class
const fluffy = new Pet("Fluffy", "dog", 13);
const pikachu = new Pet("Pikachu", "cat", 8);
// we can access class attributes on instance variables with the . notation
console.log(
  fluffy.petName,
  fluffy.type,
  fluffy.hungerLevel,
  fluffy.energyLevel
);
// call class methods on isntances
fluffy.displayPetName();
pikachu.displayPetName();
// fluffy.makeSignatureSound();
// pikachu.makeSignatureSound();
// fluffy.showPetStats();
// fluffy.increaseHunger(3);
// pikachu.showPetStats();
// pikachu.increaseHunger(5);
// pikachu.showPetStats();

// console.log(pikachu.name, pikachu.type, pikachu.hungerLevel);
