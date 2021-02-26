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