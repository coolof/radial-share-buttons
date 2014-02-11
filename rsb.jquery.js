(function($) {

  /* Global Variables */
  var globalUrl = encodeURI(document.location);
  var globalMessage = document.title;

  var defaultSettings = {
    position: 'top',
    zIndex: 10,
    facebookShareUrl: globalUrl,
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

  $.fn.rsb = function(args) {
    var settings = $.extend({}, defaultSettings, args);
    return this.each(function() {
      /* Add default class used in css */
      $(this).addClass('rsb-wrapper');
  
      /* Append our html code */
      $(this).append('<div class="rsb-trigger"></div><div class="rsb-buttons"><a class="facebook">Facebook</a><a class="twitter">Twitter</a><a class="pinterest">Twitter</a><a class="googleplus">Email</a><a class="email">E-mail</a></div>');
  
      /* Set main class to determine where the buttons go, working values are top, and bottom. Default is top, any incorrect value will return top */
      if (settings.position === 'bottom') {
        $(this).addClass(settings.position);
      }
      else {
        $(settings.selector).addClass('top');
      }

      /* Add child classes instead of using :nth-child in css. This could probably look also look at the social media class instead. */
      $(this).find('.rsb-buttons').each(function() {
        $(this).find('a').each(function(i) {
          $(this).addClass("rsb-item-"+(i+1));
        });
      });
  
      /* Set z-index from variable so we can play nicely with other z-index objects */
      $(this).css('z-index', settings.zIndex);
      $(this).find('.rsb-trigger').css('z-index', settings.zIndex+15);
      $(this).find('.rsb-buttons').css('z-index', settings.zIndex+5);
      $(this).find('.rsb-buttons a').css('z-index', settings.zIndex+10);
  
  
      /* Link customization */
      /* Twitter */
      if(settings.twitterUsername != '') {
        settings.twitterUsername = "&via=" + settings.twitterUsername;
      }
  
  
      /* Links */
      $(this).find('.rsb-buttons a:not(.email)').attr("onclick", "javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=335,width=600');return false;");
      $(this).find('.rsb-buttons .facebook').attr('href', "https://www.facebook.com/sharer/sharer.php?u=" + settings.facebookShareUrl);
      $(this).find('.rsb-buttons .twitter').attr('href', "http://twitter.com/share?url=" + settings.twitterShareUrl + settings.twitterUsername + "&text=" + settings.twitterShareMessage);
      $(this).find('.rsb-buttons .pinterest').attr('href', "http://pinterest.com/pin/create/link/?url=" + settings.pinterestShareUrl + "&description=" + settings.pinterestDescription);
      $(this).find('.rsb-buttons .googleplus').attr({
        href: "https://plus.google.com/share?url=" + settings.googleplusUrl,
        onclick: "javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
      });
      $(this).find('.rsb-buttons .email').attr('href', "mailto:" + settings.emailTo + "?Subject=" + settings.emailSubject + "&Body=" + settings.emailMessage);

      /* Do stuff! */
      $(this).find('.rsb-trigger').each(function() {
        $(this).click(function() {
          $(this).parent().toggleClass('open');
        });
      });
    });
  }
})(jQuery);

