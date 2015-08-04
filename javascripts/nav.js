$(function(){
  header = $('body > header')
  var prevScroll = 0,
      curDir = 'down',
      prevDir = 'up';
      headerHeight = header.outerHeight()
  $(window).scroll(function(){
    	if($(this).scrollTop() >= prevScroll){
          curDir = 'down';
          if(curDir != prevDir){
          $(header).stop();
    	  	$(header).animate({ top: -headerHeight }, 300);
          prevDir = curDir;
          }
      } else {
          curDir = 'up';
          if(curDir != prevDir){
          $(header).stop();
          $(header).animate({ top: '0px' }, 300);
          prevDir = curDir;
          }
      }
      prevScroll = $(this).scrollTop();
  });

})