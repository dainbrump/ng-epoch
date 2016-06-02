## ng-epoch

... is an AngularJS component wrapper for the [Epoch](https://github.com/fastly/epoch).
The creation of this set of components stemmed from the need for a simple set of
charts where each chart could have data fed to it via AngularJS. I first looked
for a decent charting module for Angular and couldn't find one that satisfied the
client needs. That's when I stumbled upon Epoch.

### Requirements

First, it should be obvious that ng-epoch will depend on [Epoch](https://github.com/fastly/epoch)
and any of its dependencies. Keep this in mind should you choose to install
manually. Please read the installation instructions on the Epoch project site
for further help. Other than that, ng-epoch only requires AngularJS 1.5+.

### Installation

#### Automated installation via Bower

```
bower install ng-epoch
```

This will download the latest version of ng-epoch and it's dependencies into
your project. Those dependencies are:

* [AngularJS](https://angularjs.org/)
* [d3](https://github.com/mbostock/d3)
* [jQuery](http://jquery.com/)
* [Epoch](https://github.com/fastly/epoch)

**Important:** When including the libraries in your page, ensure that D3 is
loaded before Epoch.

#### Manual Installation (Old skool)

Visit each of the project sites listed above and download their packages and
put them into your project directory. Then proceed to the Preparation steps 
below.

#### Manual Installation (Hardcore-parkour)

If you can locate CDN sources for each of the above listed libraries, and you
prefer CDN distributions, then identify the URLs for the libraries you can,
download the source packages you can't find CDNs for applying the Old Skool
method above, and finally proceed to the Preparation steps below.

### Preparation

In the head of your page, include the base stylesheet. Instructions for customizing
chart styles is available on the [Epoch Project Site](http://fastly.github.io/epoch).

```html
<link rel="stylesheet" href="[PATH_TO_BOWER_COMPNENTS]/epoch/epoch.min.css" />
```

Then, where you load your javascript sources, add the following sources.

If you do not already have jQuery and AngularJS included:

```html
<script src="[PATH_TO_BOWER_COMPNENTS]/jquery/dist/jquery.min.js"></script>
<script src="[PATH_TO_BOWER_COMPNENTS]/angular/angular.min.js"></script>
```

After you load those two libraries, include:

```html
<script src="[PATH_TO_BOWER_COMPNENTS]/d3/d3.min.js"></script>
<script src="[PATH_TO_BOWER_COMPNENTS]/epoch/epoch.min.js"></script>
<script src="[PATH_TO_BOWER_COMPNENTS]/ng-epoch/ng-epoch.js"></script>
```

To ensure proper functionality, make sure that the sources are loaded in this
general order.

### Implementation

Now for the fun part... create a chart. You should be able to get all the info 
you need from the [docs page](http://dainbrump.github.io/ng-epoch/). The docs 
are slated for an update real soon. For further details I will refer you to the 
testpage.html under the example directory and say "Good luck. Kirk, out."

### Copyright / Legal

I claim no copyright for any of the supporting libraries. Please refer to their
copyright notices for usage and restrictions. Ng-epoch is released under the MIT
license.

The MIT License (MIT)

Copyright (c) 2016 Mark Litchfield.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
