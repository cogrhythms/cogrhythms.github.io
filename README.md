CRC Website
===========

This project houses files for the Cognitive Rhythms Collaborative website (cogrhythms.bu.edu).

~~The current site is vanilla HTML, CSS, and JS, originally drafted in (*gasp*) Dreamweaver.~~ It needs a facelift. It needs some content added and updated ~~(especially from the 2013 conference)~~. It needs to be easier for non-HTML people to maintain and augment.

The site is now hosted by [GitHub pages](pages.github.com) at [http://cogrhythms.github.io/crc_website/](http://cogrhythms.github.io/crc_website/), with the more commonly used alias [cogrhythms.bu.edu](http://cogrhythms.bu.edu).  GitHub pages can use the templating features of [Jekyll](http://jekyllrb.com/) to simplify working with the site. We are also starting to make better use of GitHub for working groups and collaborations, and will be moving that content here and making as much of it public as we can.

A note about [GitHub pages](pages.github.com): For project pages, whatever you put on the specially named `gh-pages` branch goes up as the site `username.github.io/projectname`. ~~We'll handle domain renaming separately once we get this set up like we want it.~~

Here's Nick's list of things that still need fixing on this site:

* The templated version of the site is ready to for testing and transition.  You can switch over to it by deleting the ".htm" from any url and it should be auto-replaced by a "/" and move you over to the new version (e.g. `groups.htm` becomes `groups/`). Once we're satisfied with the templated version, we just delete the root-level `index.html` and rename `new_index.md` to `index.md` and the rest should just work.
* This site was built before [Bootstrap](getbootstrap.com) was a "thing". I used Dreamweaver's Spry library to do accordions and collapsing panels.  We should migrate to Bootstrap (either the vanilla jQuery version or the [Angular.js version](http://angular-ui.github.io/bootstrap/)).
* We should transition from html to markdown wherever possible.
* We should probably move lists of data to files in the `_data` directory. More info on how to work with those can be found at [jekyllrb.com/docs/datafiles/](http://jekyllrb.com/docs/datafiles/).
* The site could definitely use a facelift, and should probably look more bootstrap-ish.
* [The Science Network](http://thesciencenetwork.org/) is really slow right now, so I'm having trouble getting the embedding urls for the last few conference videos. I'll wrap that up soon.
