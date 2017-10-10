// class names must be capitalized

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  } // no need for comma

  getGreeting() {
    return `Hi I am ${this.name}!`; // This is called a template string. Saves from concatonation
  }

  getDescription() {
    return `${this.name} is ${this.age}.`
  }
}

// extends gives you access to everything in the Person class
class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // Super allows you acceess to the above constructor paramaters
    this.major = major;
  }

  hasMajor() {
    return !!this.major; // !! allows you flip the !, basically flipping it twice
  }

  // This allows us to over ride
  getDescription() {
    let description = super.getDescription(); // Gives access to the above getDescription method!

    if(this.hasMajor()) {
      description = description + ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if(this.homeLocation) {
      greeting = greeting + ` I'm visting from ${this.homeLocation}!`
    }

    return greeting
  }
}


// This creates a new instance of the above class
const me = new Traveler('Roderick Pride', 32, 'Little Rock');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
