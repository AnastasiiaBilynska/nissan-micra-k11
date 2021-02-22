setInterval(updateClock, 1000);
function updateClock() {
  const clock = document.querySelector(".time");
  clock.innerText = new Date().toLocaleTimeString();
}
/*function openBurger() {
const burger = document.querySelector(".header_burger");
const cap = document.querySelector(".cap");
const headerMenu = document.querySelector(".header_nav");

document.querySelector(".header_burger").addEventListener("click", () => (cap, headerMenu).toggleClass("active");  )
} */
/*$(document).ready(function() {
  $(".header_burger").click(function(event) {
   $(".heder_burger, .cap, .header_nav").toggleClass("active");
  });
 });

 document.querySelector(".header_burger")*/
