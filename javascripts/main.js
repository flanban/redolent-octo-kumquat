$( window ).load(function() {
  
  //set hero height
  var heroHeight = $(window).outerHeight();
 // $('.hero').height(heroHeight / 1.5)
  
  //interior hero page height
  var interiorHeroHeight = $(window).outerHeight()/2.25;
  
  //$('.interior-hero').height(interiorHeroHeight)
  
  
  // fade out on scroll
  /*
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
  */
  
  
});


$(document).ready(function() {
  
  //widow fix
  $('p, .widowless, h5, .header-1').widowFix();
  
  
  // fit text
//  $(".home-page-headline").fitText(2.2, { minFontSize: '18px'});
//  $(".home-page-graphic").fitText(.2, { minFontSize: '18px'});
  
  
//  $('.circle-text').circleType({radius: 284});
//  $('.circle-text-shallow').circleType({radius: 480});
//  $('.circle-text-dir1').circleType({radius: 284, dir:-1});

  

    
    
    /* old service nav, still kinda cool
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
    }); */
});

/*
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
*/

























