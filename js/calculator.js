// let add = document.getElementById('addBtn');
// let subtract = document.getElementById('subtractBtn');
// let multiplication = document.getElementById('multiplyBtn');
// let divide = document.getElementById('divideBtn');

var numberOne = document.getElementById('input1');
var numberTwo = document.getElementById('input2');

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

let multiply = document.getElementById('multiplyBtn');
multiply.addEventListener('click', multiplyNum);

function multiplyNum() {
  let outPut = parseInt(numberOne.value) * parseInt(numberTwo.value);
  document.getElementById("outPut").innerHTML = outPut;
  console.log('* outPut', outPut);
};

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

let add = document.getElementById('addBtn');
add.addEventListener('click', addNum);

function addNum() {
  let outPut = parseInt(numberOne.value) + parseInt(numberTwo.value);
  document.getElementById("outPut").innerHTML = outPut;
  console.log('+ outPut', outPut);
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

let subtract = document.getElementById('subtractBtn');
subtract.addEventListener('click', subtractNum);

function subtractNum() {
  let outPut = parseInt(numberOne.value) - parseInt(numberTwo.value);
  document.getElementById("outPut").innerHTML = outPut;
  console.log('- outPut', outPut);
}


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

let divide = document.getElementById('divideBtn');
divide.addEventListener('click', divideNum);

function divideNum() {
  let outPut = parseInt(numberOne.value) / parseInt(numberTwo.value);
  document.getElementById("outPut").innerHTML = outPut;
  console.log('/ outPut', outPut);
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

// function threeArguments() {
//   if (condition) {
//     document.getElementById("output").innerHTML = output;
//   }
// }

