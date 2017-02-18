
/*
/  NOslideshow.js (v0.3)
/
/  Nono Martínez Alonso, www.nono.ma
*/

var slideshow = function (token) {

  // Unique token to differentiate SlideShows
  this.token = token;
  this.slides = [];
  this.currentPosition = 0;
  this.index = 0;

  // Container with image, background for transitions, label
  // This holds the properties of the state, i.e. the slide
  this.container = {};

  // Timer to hold a setInterval instance
  this.timer = null;

  // Override for custom behavior on slideDisplay();
  this.didDisplaySlide = function() { this.index++; };
}

slideshow.prototype.setSlides = function(slides) {
  this.slides = slides;
};

/*
slideshow.prototype.play = function(interval) {
  this.timer = setInterval("this.advanceSlide()", interval);
}

slideshow.prototype.stop = function() {
  clearInterval(this.timer);
}*/

slideshow.prototype.advanceSlide = function() {
  this.currentPosition++;
  if(this.currentPosition > this.slides.length-1) {
    this.currentPosition = 0;
  }

  this.didAdvanceSlide();
};

slideshow.prototype.nextIndex = function() {
  var nextIndex = this.currentPosition + 1;
  if (nextIndex > this.slides.length-1) {
    nextIndex = 0;
  }
  return nextIndex;
}

slideshow.prototype.currentSlide = function() {
  return this.slides[this.currentPosition];
}

slideshow.prototype.nextSlide = function() {
  return this.slides[this.nextIndex()];
}

slideshow.prototype.didAdvanceSlide = function() {
  this.displaySlide();
};

slideshow.prototype.displaySlide = function() {

    var currentSlide = this.currentSlide();
    var nextSlide = this.nextSlide();
    var container = this.container;

    // Set back image
    container.background.css('background-image', "url('img/slides/" + currentSlide.image + "')");

    // Set current slide stuff

    container.label.html(currentSlide.name);
    container.image.animate({opacity: '0.0'}, 500, function (){
      $(this).css('opacity', '1.0');
      container.image.css('background-image', "url('img/slides/" + currentSlide.image + "')");
    });

    setTimeout('$(".cover-img.cover-img__b").css("background-image", "url(\'img/slides/' + nextSlide.image + '\')")', 1000);

    this.didDisplaySlide();
};

slideshow.prototype.randomSlide = function() {
  var slide_index = Math.floor(Math.random() * this.slides.length);
  return this.slides[slide_index];
}

module.exports = slideshow;
