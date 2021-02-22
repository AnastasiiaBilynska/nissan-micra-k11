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



/*
class Carousel {
  constructor(product) {
    this.product = product;
    this.currInd = 0;
    this.showCurrentProduct();
    document.querySelector(".prev").addEventListener("click",
      () => this.showPrevProduct());
    document.querySelector(".next").addEventListener("click",
      () => this.nextProduct());
    setInterval(() => this.nextProduct(), 5000);
  }
  showCurrentProduct() {
    document.querySelector(".current") = this.nextProduct[this / currInd];
  }
  nextProduct() {
    this.currInd++;
    if (++this.currInd >= this.product.length) this.currInd = 0;
    this.showCurrentProduct();
  }
  prevProduct() {
    if (--this.currInd < 0) this.currInd = this.product.length - 1;
    this.showCurrentProduct();
  }
}

new Carousel([document.querySelectorAll("li .carousel"]);


*/