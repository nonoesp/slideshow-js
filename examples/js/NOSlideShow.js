
/* 
/  NOSlideShow.js (v0.2)
/ 
/  Nono Martínez Alonso (@nonoesp)
*/

function SlideShow(token) {

  // Unique token to differentiate SlideShows
  this.token = token;
  this.slides = [];
  this.currentPosition = 0;

  // Container with image, background for transitions, label
  this.container = { image: false,
                     background: false,
                     label: false };

  // Override for custom behavior on slideDisplay();
  this.didDisplaySlide = function() { };
}

SlideShow.prototype.setSlides = function(slides) {
  this.slides = slides;
};

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
    container.background.css('background-image', "url('" + currentSlide.image + "')");

    // Set current slide stuff
    
    container.label.html(currentSlide.name);      
    container.image.animate({opacity: '0.0'}, 500, function (){
      $(this).css('opacity', '1.0');
      container.image.css('background-image', "url('" + currentSlide.image + "')");
    });    
    
    //setTimeout('$(".cover-img.cover-img__b").css("background-image", "url(\'img/slides/' + nextSlide.image + '\')")', 1000);

    this.didDisplaySlide();
};