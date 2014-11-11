## ng-epoch

... is an AngularJS directive wrapper for the [Epoch](https://github.com/fastly/epoch).
The creation of this set of directives stemmed from the need for a simple set of
charts where each chart could have data fed to it via AngularJS. I first looked
for a decent charting module for Angular and couldn't find one that satisfied the
client needs. That's when I stumbled upon Epoch.

### Requirements

First, it should be obvious that ng-epoch will depend on [Epoch](https://github.com/fastly/epoch)
and any of it's dependencies. Keep this in mind should you choose to install
manually. Please read the installation instructions on the Epoch project site
for further help. Other than that, ng-epoch only requires AngularJS 1.2+.

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

#### Manual Installation (Old Skool style)

Visit each of the project sites listed above and download their packages and
unarchive them into your project directory. Then proceed to the Preparation
steps below.

#### Manual Installation (Hardcore Parkour style)

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

Now for the fun part... create a chart. Unfortunately, I haven't gotten this far
in documenting this little gem. I will update this readme when I have a little
more time. I am also working on a gh-pages. In the meantime, I will refer you
to the testpage.html under the example directory and say "Good luck. Kirk, out."

### Copyright / Legal

I claim no copyright for any of the supporting libraries. Please refer to their
copyright notices for usage and restrictions.

In regards to the ng-epoch source, I'm keeping it kindergarten.

* If you like it, use it.
* If you don't like it, don't use it.
* If you make or have suggestions for improvements, share please.
