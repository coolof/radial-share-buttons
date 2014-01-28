var rsb = function(pos) {
  
  var zIndex = 10;
  var openWidth = 220;
  var buttonWidth = $('.rsb-buttons a').width();
  
  /* Append our html code */
  $('.rsb').append('<div class="rsb-trigger"></div><div class="rsb-buttons"><a class="facebook">Facebook</a><a class="twitter">Twitter</a><a class="pinterest">Twitter</a><a class="email">Email</a><a class="copy">Copy</a></div>');
  
  /* Set main class to determine where the buttons go, accepter values are top, left, bottom and right. Default is top, any incorrect value will be top :) */
  if(pos === "bottom" | "left" | "right") {
    $('.rsb').addClass(pos);
  }
  else {
    $('.rsb').addClass("top");
  }
  
  /* Set z-index from variable*/
  $('.rsb').css('z-index', zIndex);
  $('.rsb .rsb-trigger').css('z-index', zIndex+10);
  $('.rsb .rsb-buttons a').css('z-index', zIndex+5);
  
  /* Do stuff! */
  $('.rsb-trigger').click(function() {
    $(this).parent().toggleClass('open');
  });
  
  console.log(pos);

};