$(function(){
  header = $('body > header')
  var prevScroll = 0,
      curDir = 'down',
      prevDir = 'up';
      headerHeight = header.outerHeight()
      
  function showNav() {
    $(header).stop();
  	$(header).animate({ top: -headerHeight }, 300);
    prevDir = curDir;
  }
  
  function hideNav() {
    $(header).stop();
    $(header).animate({ top: '0px' }, 300);
    prevDir = curDir;
  }
// && !$("#services-nav").hasClass("stuck")
  function checkPosition() {
      if (window.matchMedia('(max-width: 767px)').matches) {
        $(window).scroll(function(){
          	if($(this).scrollTop() >= prevScroll){
          	  curDir = 'down';
              if(curDir != prevDir){
                showNav()
              }
            } else if ($("#services-nav").hasClass("stuck")) {
              curDir = 'up';
            } else {
              curDir = 'up';
              if(curDir != prevDir) {
                hideNav()
              }
            }
            prevScroll = $(this).scrollTop();
        });
      } else {
        //...
      }
  }

  
  //show nav if mouse goes near the top
  $("body").on("mousemove",function(event) {
    if (event.clientY < headerHeight) {
      // do something
      //hideNav()
    } else {
     // showNav()
    }
  });

})