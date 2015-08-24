$(function(){
  
  var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
      if (!uniqueId) {
        uniqueId = "Don't call this twice without a uniqueId";
      }
      if (timers[uniqueId]) {
        clearTimeout (timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();
  
  header = $('body > header')
  var prevScroll = 0,
      curDir = 'down',
      prevDir = 'up';
      headerHeight = header.outerHeight()
      
  function hideNav() {
    $(header).stop();
  	$(header).animate({ top: -headerHeight }, 300);
    prevDir = curDir;
  }
  
  function showNav() {
    $(header).stop();
    $(header).animate({ top: '0px' }, 300);
    prevDir = curDir;
  }
// && !$("#services-nav").hasClass("stuck")


  // desktop nav
  function scrollNav() {
    
    $(window).scroll(function(){
       	if($(this).scrollTop() >= prevScroll){
       	  curDir = 'down';
           if(curDir != prevDir){
             hideNav();
           }
         } else if ($("#services-nav").hasClass("stuck")) {
           curDir = 'up';
         } else {
           curDir = 'up';
           if(curDir != prevDir) {
             showNav();
           }
         }
         prevScroll = $(this).scrollTop();
         headerHeight = header.outerHeight();
     });
  }
  
  // mobile nav
  function mobileNav() {
    $(window).unbind('scroll');
    headerHeight = header.outerHeight()
    hideMobileNav();
  }
  
  // choose between desktop and mobile nav
  function updateNav() {
    if (window.matchMedia('(min-width: 768px)').matches) {
      scrollNav();
    } else {
      mobileNav();
    }
  }
  
  updateNav();
  
  /*
  // turn off/on nav based on device width
  $(window).resize(function () {
      waitForFinalEvent(function(){
        
        // updateNav();
      }, 500, "wtf");
      
  });
  */
  
  
  /* slide mobile nav down//up
  function showMobileNav() {
    $('body').css('overflow', 'hidden')
    headerHeight = header.outerHeight()
    $(header).animate({
        top: "0"
    }, 150);
    $(this).one("click", hideMobileNav);
  }
  function hideMobileNav() {
    $('body').css('overflow', 'auto')
        $(header).animate({
        top: -headerHeight
    }, 300);
    $(this).one("click", showMobileNav);
  }
  */

  // fade mobile nav in/out
  function showMobileNav() {
    $('body').css('overflow', 'hidden')
    headerHeight = header.outerHeight();
    $(header).fadeIn();

    $('.hamburger').one("click", hideMobileNav);
  }
  function hideMobileNav() {
    $('body').css('overflow', 'auto')
    $(header).fadeOut();
    $('.hamburger').one("click", showMobileNav);
  }

  
  
  /*
  //show nav if mouse goes near the top
  $("body").on("mousemove",function(event) {
    if (event.clientY < headerHeight) {
      // do something
      //showNav()
    } else {
     // hideNav()
    }
  });
  */
});
