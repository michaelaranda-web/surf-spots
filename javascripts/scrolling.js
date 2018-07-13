var sections = [
  $("#top-section"),
  $("#france-surf-section"),
  $("#taiwan-surf-section"),
  $("#south-africa-surf-section"),
  $("#australia-surf-section"),
  $("#brazil-surf-section")
];
    
var activeSection = 1;
const scrollIntoViewPixelBuffer = 175;

function initializeScrollButtons() {  
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }
  });
}

function setActiveScrollButtonInterval() {
  var timeout = null;

  $(window).scroll(function () {
    if (!timeout) {
      timeout = setTimeout(function () { 
        clearTimeout(timeout);
        timeout = null;
        
        $("#scroll-button-"+activeSection).removeClass("active");
        
        if ($(window).scrollTop() >= sections[5].offset().top - scrollIntoViewPixelBuffer) {
          activeSection = 6;
        }
        else if ($(window).scrollTop() >= sections[4].offset().top - scrollIntoViewPixelBuffer) {
          activeSection = 5;
        }
        else if ($(window).scrollTop() >= sections[3].offset().top - scrollIntoViewPixelBuffer) {
          activeSection = 4;
        }
        else if ($(window).scrollTop() >= sections[2].offset().top - scrollIntoViewPixelBuffer) {
          activeSection = 3;
        }
        else if ($(window).scrollTop() >= sections[1].offset().top - scrollIntoViewPixelBuffer) {
          activeSection = 2;
        }
        else {
          activeSection = 1;
        }
        
        $("#scroll-button-"+activeSection).addClass("active");
      }, 250);
    }
  });
}