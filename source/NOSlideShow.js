
/*
/  NOSlideShow.js (v0.2.1)
/
/  Nono Martínez Alonso (@nonoesp)
/
/ TODO:
/ [ ] SlideShow holds its own timer, i.e. setInterval
/ [ ] Slideshow can .play(interval) and .stop()
*/

function SlideShow(token) {

  // Unique token to differentiate SlideShows
  this.token = token;
  this.slides = [];
  this.currentPosition = 0;

  // Container with image, background for transitions, label
  // This holds the properties of the state, i.e. the slide
  this.container = {};

  // Timer to hold a setInterval instance
  this.timer = null;

  // Override for custom behavior on slideDisplay();
  this.didDisplaySlide = function() { };
}

SlideShow.prototype.setSlides = function(slides) {
  this.slides = slides;
};

/*
SlideShow.prototype.play = function(interval) {
  this.timer = setInterval("this.advanceSlide()", interval);
}

SlideShow.prototype.stop = function() {
  clearInterval(this.timer);
}*/

SlideShow.prototype.advanceSlide = function() {
  this.currentPosition++;
  if(this.currentPosition > this.slides.length-1) {
    this.currentPosition = 0;
  }

  this.didAdvanceSlide();
};

SlideShow.prototype.nextIndex = function() {
  var nextIndex = this.currentPosition + 1;
  if (nextIndex > this.slides.length-1) {
    nextIndex = 0;
  }
  return nextIndex;
}

SlideShow.prototype.currentSlide = function() {
  return this.slides[this.currentPosition];
}

SlideShow.prototype.nextSlide = function() {
  return this.slides[this.nextIndex()];
}

SlideShow.prototype.didAdvanceSlide = function() {
  this.displaySlide();
};

SlideShow.prototype.displaySlide = function() {

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
