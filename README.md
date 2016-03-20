NOSlideShow
===========

Simple SlideShow Library In JavaScript.

## Live Preview

* [Full](http://nonoesp.github.io/NOSlideShow)
* [Cover](http://nonoesp.github.io/NOSlideShow/index-cover.html)
* [Crop](http://nonoesp.github.io/NOSlideShow/index-crop.html)

## JavaScript Code

```
var mySlideShow = new SlideShow('projectSlides');
    mySlideShow.container.label = $(".cover-subtitle");
    mySlideShow.container.image = $(".crop-img.cover-img__a");
    mySlideShow.container.background = $(".crop-img.cover-img__b");

  // Set Slides.
  mySlideShow.setSlides([{name: 'Top Of The Rock. New York.', image: 'http://farm9.staticflickr.com/8204/8237429748_216c68cda0_b.jpg'},
                         {name: 'Just A Bokeh. Myrtle Beach. North Carolina.', image: 'http://farm8.staticflickr.com/7068/6977355307_6d41ffd1f7_b.jpg'},
                         {name: 'Nags Head. North Carolina', image: 'http://farm8.staticflickr.com/7052/6884405703_cdb4d5d3d0_b.jpg'},
                         {name: 'Siena. Italy.', image: 'http://farm5.staticflickr.com/4030/4249710646_f251203364_b.jpg'}
						            ]);

  // Display first slide.
  mySlideShow.displaySlide();

  // Loop slides.
  var showInterval = setInterval("mySlideShow.advanceSlide()", 3000);
```

## License

**NOSlideShow** is licensed under the [MIT license](http://opensource.org/licenses/MIT).

## Me

Hi there, I'm Nono Martínez Alonso. I tweet on [@nonoesp](http://www.twitter.com/nonoesp) and write on [Getting Simple](http://gettingsimple.com) and [nono.ma/says](http://nono.ma/says).
