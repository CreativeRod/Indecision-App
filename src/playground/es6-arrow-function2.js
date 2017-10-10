// Argument object - no longer bound with arrow functions
// this keyword - no longer bound

const add = (a, b) => {
  return a + b;
};

console.log(add(55, 1));

const user = {
  name: 'Rod',
  cities: ['Little Rock','New York','Houston'],
  printPlacesLived () {
      return this.cities.map((city) => {
        return this.name + ' has lived in ' + city;
      });
  }
};

console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
  numbers: [1, 5, 6, 7, 10],
  multiplyBy: 3,
  multiply () {
    return this.numbers.map((num) => {
      return this.multiplyBy * num;
    });
  }
};

console.log(multiplier.multiply());
