# Radial Share Buttons (rsb)
I made this to learn more about Javascript and to actually make something that works. Still very early in development but I've had fun this far so it might go places.

##What it does
Radial Share Buttons, or rsb for short, is a simple little share plugin. It used jquery and css3 to show and animate five (as of right now) preset share options; Facebook, Twitter, Pinterest, Google+ and E-mail. It takes up a small space (50x50px normal and 200x125px expanded) and is easily positioned. The script can handle multiple buttons on a single page (see demo.html) but are right now limited to the same settings.

##Settings
As of right now all settings are setup in the rsb.js file. These will move to a more convenient place as soon as I learn how to do that... You can change, per button, what should be shared and what to use as message/description. Twitter also has an option to show your twitter handle in the post (via). Below is a list of available variables (all values are strings):
_Facebook variables_
* facebookShareUrl - The URL that will be shared on Facebook. Default: current page url.

_Twitter variables_
* twitterShareUrl - The URL that will be shared on Twitter. Default: current page url.
* twitterShareMessage - The actual tweet message. Default: current page title.
* twitterUsername - Will add via @twitterUsename to the tweet if set to anything but "". Default "".

_Pinterest variables_
* pinterestShareUrl - The URL that will be shared on Pinterest. Default: current page url.
* pinterestDescription = The description of the pin. Default: current page title.

_Google+ variables_
* googleplusUrl - The URL that will be shared on Google+. Default: current page url.

_E-mail variables_
* emailSubject = The subject of the e-mail. Default: current page title.
* emailMessage = The content of the e-mail. Default: current page url.
* emailTo - Optional default e-mail to send to. Default: "".

##ToDo
* Move settings to a more convenient place
* Give the option of multiple share buttons on a single page with their own settings
* Add support for left and right button positions.
* Add settings for button size and placement for those who don't want to edit the css.