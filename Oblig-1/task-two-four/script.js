window.onload = startup;

var calculateNumberOne, calculateNumberTwo;

function startup() {
  console.log("script load");

  var taskThreeButton = document.getElementById("task-3-button");
  taskThreeButton.addEventListener("click", taskThree)

  var claculateButton = document.getElementById("calculateButton");
  claculateButton.addEventListener("click", taskFour);

  var randomNumberButton = document.getElementById("randomNumberButton");
  randomNumberButton.addEventListener("click", setRandomNumber)
}

function taskTwo() {
    console.log("Task 2")

    var calculateNumberOne = 1;
    var calculateNumberTwo = 4;

    console.log(numberOne + numberTwo);
    console.log(numberOne - numberTwo);
    console.log(numberOne * numberTwo);
    console.log(numberOne / numberTwo);
}

function taskThree() { 
    console.log("Task 3")

    var calculateNumberOne = Number(prompt("Please ender a number" , ""));
    var calculateNumberTwo = Number(prompt("Please ender a number" , ""));

    calculateNumberOne = parseInt(calculateNumberOne);
    calculateNumberTwo = parseInt(calculateNumberTwo);

    console.log(calculateNumberOne);
    console.log(calculateNumberTwo);

    document.getElementById('math-this-one').innerHTML = calculate.pluss(calculateNumberOne, calculateNumberTwo);
    document.getElementById('math-this-two').innerHTML = calculate.minus(calculateNumberOne, calculateNumberTwo);
    document.getElementById('math-this-three').innerHTML = calculate.multi(calculateNumberOne, calculateNumberTwo);
    document.getElementById('math-this-four').innerHTML = calculate.devide(calculateNumberOne, calculateNumberTwo);

}

function taskFour() {
    console.log("tast 4");
    console.log(document.getElementById('calculate-select').value)

    var calculateNumberOne = document.getElementById('text-one').value;
    var calculateNumberTwo = document.getElementById('text-two').value;

    var calculateNumberOne = parseInt(calculateNumberOne);
    var calculateNumberTwo = parseInt(calculateNumberTwo);

    var userSelect = document.getElementById('calculate-select').value;

  switch (userSelect) {
    case "+":
      console.log("+++");
      var numberOne = calculate.pluss(calculateNumberOne, calculateNumberTwo);

      document.getElementById('calulate-this').innerHTML = numberOne; 

      document.getElementById('is-it-odd').innerHTML = calculate.odd(numberOne) == true ? "The number is an eaven number!" : "The number is an odd number!";
      
    break;
    
    case "-":
      console.log("---");
      var numberOne = calculate.minus(calculateNumberOne, calculateNumberTwo);

      document.getElementById('calulate-this').innerHTML = numberOne;

      document.getElementById('is-it-odd').innerHTML = calculate.odd(numberOne) == true ? "The number is an eaven number!" : "The number is an odd number!";
    break;
    
    case "*":
      console.log("***");
      var numberOne = calculate.multi(calculateNumberOne, calculateNumberTwo);

      document.getElementById('calulate-this').innerHTML = numberOne;

      document.getElementById('is-it-odd').innerHTML = calculate.odd(numberOne) == true ? "The number is an eaven number!" : "The number is an odd number!";
    break;

    case "/":
      console.log("///");
      var numberOne = calculate.devide(calculateNumberOne, calculateNumberTwo);

      document.getElementById('calulate-this').innerHTML = numberOne;

      document.getElementById('is-it-odd').innerHTML = calculate.odd(numberOne) == true ? "The number is an eaven number!" : "The number is an odd number!";
    break;

    case "%":
      console.log("%%%");
      var numberOne = calculate.mod(calculateNumberOne, calculateNumberTwo);

      document.getElementById('calulate-this').innerHTML = numberOne;

      document.getElementById('is-it-odd').innerHTML = calculate.odd(numberOne) == true ? "The number is an eaven number!" : "The number is an odd number!";
    break;

    default:
      console.log("none");
      break;
  }

}

function setRandomNumber() {
  document.getElementById('text-one').value = Math.floor(Math.random() * 10000);
  document.getElementById('text-two').value = Math.floor(Math.random() * 10000);

  taskFour();
}

var calculate = {

  pluss : function(a, b){
    return a + b;
  },
  minus : function(a, b) {
    return a - b;    
  },
  multi : function(a, b){
    return a * b;
  },
  devide : function(a, b){
    return a / b;
  },
  mod : function(a, b){
    return a % b;
  },
  odd : function(a){
    return a % 2 ? false : true
  }
}