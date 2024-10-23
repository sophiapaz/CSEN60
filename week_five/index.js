//console.log("Hello World")

//alert('Hello, World!');

//window.document.write('<p>Welcome to CSEN 60!</p>'); (window is only runtime in browser, not locally)

//document.append('<p>this should come after the h1</p>');

/*
  Function to calculate the sum of two numbers.
  Inputs: a, b - numbers to be added.
  Output: returns the sum of a and b.
*/
// TODO: fix this function
function add(a, b) {
    return a + b;
}

/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number} The sum of a and b.
 */
function add(a, b) {
    return a + b;
}

let x = 100;
/*
let x => declaration;
x = 2 => initialization
*/
if (true) {
    x = 200; // Same variable!
}
console.log(x); // Outputs: 200

let y;
y = null;
let z = 0;
console.log(y, z);

let greeting = "Hello, world!";
let response = `The time is ${new Date()}`;
console.log(response);

const age = 17;
  if(age > 18) {
    console.log("you are of age");
  } else {
    console.log(`you aren't of age. Please wait ${18 - age} years`);
  }

  let person = {
    name: "John",
    age: 30,
    isStudent: false
  };

  console.log(person["age"]);

  console.log(typeof("hello world"));