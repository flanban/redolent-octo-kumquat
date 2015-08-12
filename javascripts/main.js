



$( window ).load(function() {
  // fade out on scroll
  $(window).scroll(function() {
      if ($('.hero').length != 0) {
        var el = $('.hero');    
        var offset = el.offset();
        var opacity = ( (offset.top - el.height() ) / 400 ) * -1;
        if (opacity > 0.001) {
          $('.hero').css('opacity', opacity );
        } else {
          $('.hero').css('opacity', 0 );
        }
      }
      
      if ($('.hero-text').length != 0) {
        var el = $('.about-1');    
        var offset = el.offset();  
        var opacity = ( (offset.top - el.height() ) / 400 ) * -1;
        $('.hero-text').css('opacity', opacity );
      }
  });
  
  
  // testimonial slider
  var slider = $(".royalSlider").data('royalSlider');
  var slideCountEl = $(".rsSlideCount")
  function updCount() {
    slideCountEl.html( (slider.currSlideId+1) + '</sup>&frasl;<sub>' + slider.numSlides + '</sub>' );    
  }
  slider.ev.on('rsAfterSlideChange', updCount);
  updCount();
  
  $(".next-testimonial-button").click(function() {
    slider.next();    
  });
  
  $(".prev-testimonial-button").click(function() {
    slider.prev();    
  });
});


// widow fix
$(document).ready(function() {
//all heading 1s
    $('p').widowFix();
    
    var sticky = new Waypoint.Sticky({
      element: $('.sticky')[0]
    })
    
    var serviceNavHeight = $('#services-nav').outerHeight();
    
    $(".tax-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#services-tax").offset().top -serviceNavHeight
        }, 300);
        return false;
    });
    $(".law-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#services-law").offset().top -serviceNavHeight
        }, 300);
        return false;
    });
    $(".hr-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#services-hr").offset().top -serviceNavHeight
        }, 300);
        return false;
    });
});



// change service nav on scroll
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#services-nav ul li').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("data-anchor"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#services-nav ul li').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}



























