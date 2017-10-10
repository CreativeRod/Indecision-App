// const square = function(x) {
//   return x * x;
// };
//
// // const squareArrow = (x) => {
// //   return x * x;
// // };
//
// //Expression
// const squareArrow = (x) => x * x
//
//
// console.log(square(8));
// console.log(squareArrow(8));


// Challenge - Use Arrow Functions
// getFirstName('Mike Smith') -> Mike
// Create reg arrow function
// Create second arrow function using shorthand syntax
// Console.log
/*

  if(fullName) {
    firstName = fullName.split()[0];
  } else {
  console.log(firstName);
  }

*/

const getFirstName = (fullName) => {
  return fullName.split()[0];
};

console.log(getFirstName('Rod Pride'));
