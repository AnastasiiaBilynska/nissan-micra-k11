
/* class Carousel {
    constructor(slides) {
        this.slides = slides;
        this.currIdx = 0;
        this.showCurrentSlides();
        	this.options = Sim.defaults;
	 Sim.initialize(this)
    Sim.defaults = {
	loop: true,    
	auto: true,     
	interval: 5000,
	arrows: true,   
	dots: true  
};

 

        document.querySelector(".prev").addEventListener("click",
       () => this.prevSlides() );
       document.querySelector(".next").addEventListener("click",
       () => this.nextSlides() );
       setInterval(() => this.nextSlides(), 5000);
    }
    showCurrentSlides() {
        document.querySelector(".carousel").src = this.slides[this.currIdx];
    }
    nextSlides() {
 if (++this.currIdx >= this.slides,length) this.currIdx = 0;
 this.showCurrentSlides();
    }
    prevSlides() {
        if (--this.currIdx <0) this.currIdx = this.slides.length - 1;
 this.showCurrentSlides();
    }
}
/* 
const carousel = new Carousel (document.querySelectorAll(".slide"));  

class Carousel {
    constructor(slides) {
        this.slides = document.querySelectorAll(".slide");
        this.slidesBox = document.querySelector(".carousel");
        this.box = document.querySelector(".galary"); //віконечко
        this.currIdx = 1;
        this.prev = document.querySelector(".prev");
        this.next = document.querySelector(".next");
        this.size = this.box.clientWidth;

        this.position()
    };

    Carousel.prototype.position = function() {
        const size = this.size;
        this.slidesBox.style.transform = "translateX(" + (- index * size) + "px";

    }
Carousel.prototype.move = function() {
    let i, max
}

    new Carousel();
}

