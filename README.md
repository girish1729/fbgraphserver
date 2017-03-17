Facebook graph API without browser
===========================================

Overview
========

When you use facebook integration there is always this pesky interacive
brower coming in between. I do not like it, not sure about you.

When you do server side work users should be able to use our API without
using any graphical rubbish. Just use
[curl](http://curl.haxx.se) or some command line tool like
that.

Here is an attempt to do the same as we can avoid going to browser if we
use a valid access token. To obtain an access token you may need to use
the browser but only once.

This project assumes you somehow obainted access token and with that it
shows the list of friends you have and their display picture.

![buddies](https://cloud.githubusercontent.com/assets/6890469/24024507/ff6d1eb6-0ad9-11e7-98f9-2682dbd29e33.gif)

Usage
========

```
npm install
npm start

```


Contact
=======

Girish Venkatachalam <girish@gayatri-hitech.com>
