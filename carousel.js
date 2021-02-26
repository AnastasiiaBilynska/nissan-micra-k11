
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

 
 /*   document.querySelector(".prev").addEventListener("click",
       () => this.prevSlides() );
       document.querySelector(".next").addEventListener("click",
       () => this.nextSlides() );
       setInterval(() => this.nextSlides(), 5000);
    }
    showCurrentSlides() {
        document.querySelector(".container-products").src = this.slides[this.currIdx];
    }
    nextSlides() {
 if (++this.currIdx >= this.slides.length) this.currIdx = 0;
 this.showCurrentSlides();
    }
    prevSlides() {
        if (--this.currIdx <0) this.currIdx = this.slides.length - 1;
 this.showCurrentSlides();
    }


 /* этот код помечает картинки, для удобства разработки */
 let i = 0;
 for(let li of document.querySelectorAll('.slide')) {
   li.style.position = 'relative';
   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
   i++;
 }

 /* конфигурация */
 let width = 200; // ширина картинки
 let count = 1; // видимое количество изображений

 let list = document.querySelector('.container-products');
 let listElems = document.querySelectorAll('.slide');

 let position = 1; // положение ленты прокрутки

 document.querySelector('.prev').onclick = function() {
   // сдвиг влево
   position += width * count;
   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
   position = Math.min(position, 0)
   list.style.marginLeft = position + 'px';
 };

 document.querySelector('.next').onclick = function() {
   // сдвиг вправо
   position -= width * count;
   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
   position = Math.max(position, -width * (listElems.length - count));
   list.style.marginLeft = position + 'px';
 };


