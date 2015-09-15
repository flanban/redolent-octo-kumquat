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
});
