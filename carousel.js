
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
*/

const line = document.querySelector(".carousel");
const galary = document.querySelector(".galary");
const slides = document.querySelectorAll(".slide");
let sliderWidth = document.querySelector(".container-products").offsetWidth;

let widthArray = [0];
let lineWidth = 0;
let offset = 0;
const step = 0;


for(let i = 0; i < slides.length; i++) {
    widthArray.push(slides[i].offsetWidth);
lineWidth += slides[i].offsetWidth;
}
line.style.width = lineWidth + "px";

   document.onclick = function() {
       offset = offset + widthArray[step];
       line.style.left = +offset + "px";
       step++
   }

   


 class Carousel {
    constructor(slides) {
        this.slides = document.querySelectorAll(".slide");
        this.currIdx = 0;
        this.showCurrentSlides();
        this.line = document.querySelector(".line");
        this.galary = document.querySelector(".galary");
        this.btnNext = document.querySelector(".next");
        this.btnPrev = document.querySelector(".prev");
    
};


/*btnPrev.addEventListener("click", () => this.prevSlides() );
       document.querySelector("next").addEventListener("click",
       () => this.nextSlides() );
       setInterval(() => this.nextSlides(), 5000);
    
    showCurrentSlides() {
        document.querySelector(".slide").url= this.slides[this.currIdx];
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
*/