setInterval(updateClock, 1000);
function updateClock() {
  const clock = document.querySelector(".time");
  clock.innerText = new Date().toLocaleTimeString();
}

document.querySelector(".header_burger").addEventListener("click", function(e) {
  e.preventDefault();
 if(this.classList.contains("is-active")) {
  this.classList.remove("is-active");
  document.querySelector(".js_menu").classList.remove("active");
 }
 else {
   this.classList.add("is-active");
   document.querySelector(".js_menu").classList.add("active");
 }
})



