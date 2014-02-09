# Radial Share Buttons (rsb)
I made this to learn more about Javascript and to actually make something that works. Still early in development but I've had fun this far so it might go places.


##What it does
Radial Share Buttons, or rsb for short, is a simple share button. It used jquery and css3 to show and animate five (as of right now) preset share options; Facebook, Twitter, Pinterest, Google+ and E-mail. It takes up a small space (50x50px normal and 200x125px expanded) and is easily positioned. The script can handle multiple buttons on a single page (see demo.html). You can configure rsb so that multiple buttons use the same settings or use their own. These can be mixed so that two buttons use the same settings and a third use it's own settings.


##Installation and how to use
Download the script and include it in your html as such:
``` html
<script type="text/javascript" src="path/to/rsb.js"></script>
```

You probably also want to include the default css:
``` html
<link rel="stylesheet" href="path/to/rsb.css" />
```

Lastly add this: 
``` html
<script type="text/javascript">
  rsb();
</script>
```
Rsb automatically look for one or several elements with the class rsb to hook on to. Of course you can change this, see settings below.

You can include multiple instances of rsb and change settings individually, like this:
```html
<script type="text/javascript">
  rsb({
    selector: '.myAwesomeClass',
    position: 'bottom',
    facebookShareUrl: 'https://www.facebook.com/UnderstanditAB',
    twitterShareUrl: 'http://understandit.se'
  });
  
  rsb({
    selector: '.myAwesomeClass2',
    twitterUsername: 'olofbrickarp',
    emailSubject: 'Check this out'
  });
</script>
```
Just make sure that all the selectors exist, in this case _.myAwesomeClass_ and _.myAwesomeClass2_.


##Default Settings
__Global__
* selector _(string)_ - The selector that rsb will look for. __Default:__ '.rsb'.
* position _(string)_ - Position of the buttons. Available values: 'top', 'bottom'. Invalid values will return 'top'. __Default/Wildcard:__ 'top'.
* zIndex _(number)_ -  Starting z-index, added so that rsb will be easily compatible with z-index heavy sites. __Default:__ 10.

__Facebook__
* facebookShareUrl _(string)_ - The URL that will be shared on Facebook. __Default:__ Current page url.

__Twitter variables__
* twitterShareUrl _(string)_ - The URL that will be shared on Twitter. __Default:__ Current page url.
* twitterShareMessage _(string)_ - The actual tweet message. Default: current page title.
* twitterUsername _(string)_ - Will add _"via @twitterUsename"_ to the tweet if set to anything but ''. __Default:__ ''.

__Pinterest variables__
* pinterestShareUrl _(string)_ - The URL that will be shared on Pinterest. __Default:__ Current page url.
* pinterestDescription _(string)_ - The description of the pin. __Default:__ Current page title.

__Google+ variables__
* googleplusUrl _(string)_ - The URL that will be shared on Google+. __Default:__ Current page url.

__E-mail variables__
* emailSubject _(string)_ - The subject of the e-mail. __Default:__ current page title.
* emailMessage _(string)_ - The content of the e-mail. __Default:__ current page url.
* emailTo _(string)_ - Optional default e-mail to send to. __Default:__ ''.


##ToDo
* Add globalShareUrl setting to change all share url's at once.
* Add support for left and right button positions.
* Add settings for button size and placement.
* Backward compatibility in older browsers (javascript animations)?
* ~~Move settings to a more convenient place~~
* ~~Give the option of multiple share buttons on a single page with their own settings~~