



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
  if ($('.royalSlider').length != 0) {
    slider.ev.on('rsAfterSlideChange', updCount);
    updCount();
  }
  
  $(".next-testimonial-button").click(function() {
    slider.next();    
  });
  
  $(".prev-testimonial-button").click(function() {
    slider.prev();    
  });
});


// widow fix
$(document).ready(function() {
  
  
  
  // fit text
  $('.circle-text').circleType({radius: 284});
  $('.circle-text-dir1').circleType({radius: 284, dir:-1});

  
  //all heading 1s
    $('p').widowFix();
    
    if ($('.sticky').length != 0) {
      var sticky = new Waypoint.Sticky({
        element: $('.sticky')[0]
      })
    }
    var serviceNavHeight = $('#services-nav').outerHeight();
    
    function removeHash() { 
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    
    $(".tax-button").click(function() {
      removeHash()
      $('html, body').animate({
        scrollTop: $("#services-tax").offset().top -serviceNavHeight
      }, 300);
      return false;
    });
    $(".law-button").click(function() {
      removeHash()
      $('html, body').animate({
        scrollTop: $("#services-law").offset().top -serviceNavHeight
      }, 300);
      return false;
    });
    $(".hr-button").click(function() {
      removeHash()
      $('html, body').animate({
        scrollTop: $("#services-hr").offset().top -serviceNavHeight
      }, 300);
      return false;
    });
});


//services page nav
$( window ).scroll(function() {
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
});




























