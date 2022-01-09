window.onload = startup;

var calculateNumberOne = 0;
var calculateNumberTwo = 1;

function startup() {
  var btnBye = document.getElementById("btnBye");
  btnBye.addEventListener("click", msgBye)

  taskFive();
}
function msgBye() {
  alert('Get out of my sight plebeian!');
}

function taskTwo() {
    console.log("Task 2")

    calculateNumberOne = 1;
    calculateNumberTwo = 4;

    console.log(numberOne + numberTwo);
    console.log(numberOne - numberTwo);
    console.log(numberOne * numberTwo);
    console.log(numberOne / numberTwo);
}

function taskThree() {
    console.log("Task 3")

    calculateNumberOne = Number(prompt("Please ender a number" , ""));
    calculateNumberTwo = Number(prompt("Please ender a number" , ""));

    console.log(calculateNumberOne);
    console.log(calculateNumberTwo);

    document.getElementById('math-this-one').innerHTML = calculatePluss(calculateNumberOne, calculateNumberTwo);
    document.getElementById('math-this-two').innerHTML = calculateMinus(calculateNumberOne, calculateNumberTwo);
    document.getElementById('math-this-three').innerHTML = calculateAdd(calculateNumberOne, calculateNumberTwo);
    document.getElementById('math-this-four').innerHTML = calculateDevide(calculateNumberOne, calculateNumberTwo);

}

function taskFour() {
    console.log("tast 4");
    
    var calculateNumberOne = document.getElementById('text-one').value;
    var calculateNumberTwo = document.getElementById('text-two').value;

    console.log(+calculateNumberOne);
    console.log(+calculateNumberTwo);

    document.getElementById('calulate-this').innerHTML = calculatePluss(calculateNumberOne, calculateNumberTwo);
    
    if (calculateMod(canculateNumberOne, calculateNumberTwo) == 0) {
      document.getElementById('is-it-odd').innerHTML = "The number is an eaven number!"
    } else {
      document.getElementById('is-it-odd').innerHTML = "The number is an odd number!"
    }
}




function calculatePluss(a, b) {
  return +a + +b;
}

function calculateMinus(a, b) {
  return +a - +b;
}

function calculateAdd(a, b) {
  return +a * +b;
}

function calculateDevide(a, b) {
  return +a / +b;
}

function calculateMod(a, b) {
  return (+a + +b) % 2;  
}