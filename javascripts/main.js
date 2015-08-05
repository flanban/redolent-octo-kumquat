//preloader
$( window ).load(function() {
  // fade out on scroll
  $(window).scroll(function() {
      var el = $('.hero');    
      var offset = el.offset();  
      var opacity = ( (offset.top - el.height() ) / 400 ) * -1;
      $('.hero').css('opacity', opacity );
  });
});


// widow fix
$(document).ready(function() {
//all heading 1s
    $('p').widowFix();
});

