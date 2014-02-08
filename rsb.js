/* Variables */
var zIndex = 10;
var triggerSize = 50;
var buttonSize = 40;
var globalUrl = encodeURI(document.location);
var globalMessage = document.title;

//Facebook variables
var facebookShareUrl = globalUrl;

//Twitter variables
var twitterShareUrl = globalUrl;
var twitterShareMessage = globalMessage;
var twitterUsername = "";
var twitterShowVia = false;

//Pinterest variables
var pinterestShareUrl = globalUrl;
var pinterestDescription = globalMessage;

//Google+ variables
var googleplusUrl = globalUrl;

//E-mail variables
var emailSubject = globalMessage;
var emailMessage = globalUrl;
var emailTo = "";



/* Link customization */
/* Facebook */
/*if(facebookShareUrl == "") {
  facebookShareUrl = encodeURI(document.location);
}*/

/* Twitter */
if(twitterShowVia == true) {
  twitterUsername = "&via=" + twitterUsername;
}
/*if(twitterShareMessage == "") {
  twitterShareMessage = document.title;
}
if(twitterShareUrl == "") {
  twitterShareUrl = encodeURI(document.location);
}*/



var rsb = function(pos) {
  
  /* Append our html code */
  $('.rsb').append('<div class="rsb-trigger"></div><div class="rsb-buttons"><a class="facebook">Facebook</a><a class="twitter">Twitter</a><a class="pinterest">Twitter</a><a class="googleplus">Email</a><a class="email">E-mail</a></div>');
  
  
  /* Set main class to determine where the buttons go, working values are top, left, bottom and right. Default is top, any incorrect value will return top */
  if(pos === "bottom" | "left" | "right") {
    $('.rsb').addClass(pos);
  }
  else {
    $('.rsb').addClass("top");
  }
  
  
  /* Add child classes instead of using :nth-child in css. */
  $('.rsb-buttons a').each(function(i) {
    $(this).addClass("rsb-"+(i+1));
  });
  
  
  /* Set z-index from variable so we can play nicely with other z-index objects */
  $('.rsb').css('z-index', zIndex);
  $('.rsb .rsb-trigger').css('z-index', zIndex+15);
  $('.rsb .rsb-buttons').css('z-index', zIndex+5);
  $('.rsb .rsb-buttons a').css('z-index', zIndex+10);
  
  
  
  /* Links */
  $('.rsb-buttons a:not(.email)').attr("onclick", "javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=335,width=600');return false;");
  
  $('.rsb-buttons .facebook').attr('href', "https://www.facebook.com/sharer/sharer.php?u=" + facebookShareUrl);
  $('.rsb-buttons .twitter').attr('href', "http://twitter.com/share?url=" + twitterShareUrl + twitterUsername + "&text=" + twitterShareMessage);
  $('.rsb-buttons .pinterest').attr('href', "http://pinterest.com/pin/create/link/?url=" + pinterestShareUrl + "&description=" + pinterestDescription);
  $('.rsb-buttons .googleplus').attr({
    href: "https://plus.google.com/share?url=" + googleplusUrl,
    onclick: "javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
  });
  $('.rsb-buttons .email').attr('href', "mailto:" + emailTo + "?Subject=" + emailSubject + "&Body=" + emailMessage);
  
  
  /* Button size for future dynamicness */
  $('.rsb-trigger').outerWidth(triggerSize).outerHeight(triggerSize);
  $('.rsb-buttons a').outerWidth(buttonSize).outerHeight(buttonSize);
  
  
  /* Do stuff! */
  $('.rsb-trigger').each(function() {
    $(this).click(function() {
      $(this).parent().toggleClass('open');
    });
  });
  
  
};


