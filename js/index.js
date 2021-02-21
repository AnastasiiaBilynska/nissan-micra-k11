setInterval(updateClock, 1000);
function updateClock() {
  const clock = document.querySelector(".time");
  clock.innerText = new Date().toLocaleTimeString();
}
