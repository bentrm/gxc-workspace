# Init ExtJS 4 workspace with required packages

This inits an ExtJS workspace including an example GXC application that you
can use as a starting point for customizations.

Only things needed to run the application are

* Git
* [Sencha Cmd](https://www.sencha.com/products/extjs/cmd-download/)

Clone the repo by doing:
```
$ git clone https://github.com/bentrm/gxc-workspace.git
```

# Start GXC Full demo with Sencha Cmd tool
```
$ cd gis
$ sencha app watch
```

A development server will start on port 1841 und should present you with the
demo application.

# Sidenotes

Required packages are included with this repository as subtrees as following:

```
* ExtJS 4.2.1
	* path = ext
	* url = https://github.com/bjornharrtell/extjs.git
* GeoExt 2
	* path = packages/GeoExt
	* url = https://github.com/bentrm/geoext2.git
	* branch = local
* DeftJS
	* path = packages/deft
	* url = https://github.com/bentrm/DeftJS.git
	* branch = master
```

This is of no concern as long as no changes to theses paths are made.
