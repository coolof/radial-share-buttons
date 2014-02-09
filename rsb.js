/* Global Variables */
var globalUrl = encodeURI(document.location);
var globalMessage = document.title;

var defaultSettings = {
  selector: '.rsb',
  position: 'top',
  zIndex: 10,
  facebookShareUrl: globalUrl,
  twitterShareUrl: globalUrl,
  twitterShareUrl: globalUrl,
  twitterShareMessage: globalMessage,
  twitterUsername: '',
  pinterestShareUrl: globalUrl,
  pinterestDescription: globalMessage,
  googleplusUrl: globalUrl,
  emailSubject: globalMessage,
  emailMessage: globalUrl,
  emailTo: ''
};
  
var rsb = function(settings) {
  
  console.log(settings);
  
  settings = $.extend(defaultSettings, settings);
  
  /* Add default class used in css */
  $(settings.selector).addClass('rsb-wrapper');
  
  /* Append our html code */
  $(settings.selector).append('<div class="rsb-wrapper"><div class="rsb-trigger"></div><div class="rsb-buttons"><a class="facebook">Facebook</a><a class="twitter">Twitter</a><a class="pinterest">Twitter</a><a class="googleplus">Email</a><a class="email">E-mail</a></div></div>');
  
  
  /* Set main class to determine where the buttons go, working values are top, and bottom. Default is top, any incorrect value will return top */
  if(settings.position === 'bottom') {
    $(settings.selector).addClass(settings.position);
  }
  else {
    $(settings.selector).addClass('top');
  }
  
  
  /* Add child classes instead of using :nth-child in css. This could probably look also look at the social media class instead. */
  $(settings.selector).find('.rsb-buttons').each(function() {
    $(this).find('a').each(function(i) {
      $(this).addClass("rsb-item-"+(i+1));
    });
  });
  
  
  /* Set z-index from variable so we can play nicely with other z-index objects */
  $(settings.selector).css('z-index', settings.zIndex);
  $(settings.selector).find('.rsb-trigger').css('z-index', settings.zIndex+15);
  $(settings.selector).find('.rsb-buttons').css('z-index', settings.zIndex+5);
  $(settings.selector).find('.rsb-buttons a').css('z-index', settings.zIndex+10);
  
  
  /* Link customization */
  /* Twitter */
  if(settings.twitterUsername != "") {
    settings.twitterUsername = "&via=" + settings.twitterUsername;
  }
  
  
  /* Links */
  $(settings.selector).find('.rsb-buttons a:not(.email)').attr("onclick", "javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=335,width=600');return false;");
  
  $(settings.selector).find('.rsb-buttons .facebook').attr('href', "https://www.facebook.com/sharer/sharer.php?u=" + settings.facebookShareUrl);
  $(settings.selector).find('.rsb-buttons .twitter').attr('href', "http://twitter.com/share?url=" + settings.twitterShareUrl + settings.twitterUsername + "&text=" + settings.twitterShareMessage);
  $(settings.selector).find('.rsb-buttons .pinterest').attr('href', "http://pinterest.com/pin/create/link/?url=" + settings.pinterestShareUrl + "&description=" + settings.pinterestDescription);
  $(settings.selector).find('.rsb-buttons .googleplus').attr({
    href: "https://plus.google.com/share?url=" + settings.googleplusUrl,
    onclick: "javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
  });
  $(settings.selector).find('.rsb-buttons .email').attr('href', "mailto:" + settings.emailTo + "?Subject=" + settings.emailSubject + "&Body=" + settings.emailMessage);
  
  
  /* Button size for future dynamicness , not in use wright now*/
  //$('.rsb-trigger').outerWidth(triggerSize).outerHeight(triggerSize);
  //$('.rsb-buttons a').outerWidth(buttonSize).outerHeight(buttonSize);
  
  
  /* Do stuff! */
  $(settings.selector).find('.rsb-trigger').each(function() {
    $(this).click(function() {
      $(this).parent().toggleClass('open');
    });
  });
  
};
