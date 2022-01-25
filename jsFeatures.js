// Functions and variables

// The standard way to declare a function, with the function keyword
function myFirstFunction(param, otherParam) {
  let i = 0;
  let result = 0;
  while (i < 42) {
    result = result + param * otherParam;
    i++;
  }
  return result;
}

// Where 'let' variables can be changed, 'const', cannot
function howNotToUseConst() {
  const cantChange = 54;

  while (cantChange > 1) {
    // This will throw an error
    console.log('value of loop variable is ', cantChange);
    cantChange--;
  }
}

// Declaring a function with the arrow notation
const anArrowFunction = (whichTakes, someParameters) => {
  let canChange = 'stuff';
  const objectsAreWeird = {
    aProperty: 'a value',
    anotherProperty: 42,
    truthyStatement: false,
    innerObject: { stuff: 'an things' }
  };

  canChange = canChange.replace('ff', 'nt');
  console.log('changed to ', canChange);
  canChange = canChange + ' person'

  const functionInFunction = () => {
    // When we return the function from an arrow function, it knows the value of
    // variables where it was declared, including canChange
    console.log('we can print ', canChange);
    return `Danny Trejo is an excellent ${canChange}`;
  };

  // Note that we're actually returning a function instead of a value
  return functionInFunction;
};

// When we import code, that code is executed. We can see that by the output
// from 'anotherModule' when we import it with 'require'
const { somethingToExport } = require('./jsModules');

// When we import this module into the test file
console.log('This is also run when we import this code in the test file');


// we can accept a function as a param in the same way that we can return one
function functionsAsParams(acceptsAFunction) {
  const value = acceptsAFunction();
  console.log('function wrapping function')
  return value;
}

// You can find more examples in 'jsClasses.js'

/*
 * This is one of the two modern ways to export functions from a module. We'll
 * learn the other one when we dive into React.
 */
module.exports = {
  myFirstFunction,
  howNotToUseConst,
  anArrowFunction,
  functionsAsParams,
};
