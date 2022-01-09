window.onload = startup;
function startup() {
  var btnBye = document.getElementById("btnBye");
  var btnHello = document.getElementById("btnHello");
  btnBye.addEventListener("click", msgBye);
  btnHello.addEventListener("click", msgHello);
}
function msgBye() {
  alert('Get out of my sight plebeian!');
}
function msgHello() {
  alert('Hi you!');
}