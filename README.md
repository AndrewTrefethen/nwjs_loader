# nwjs_loader
=========

NWJS has some tricky rules when it comes to requiring other scripts, this module gets around that.

## Installation

  npm install nwjs_loader --save

## Usage

    assumed NWjs app structure

      src/
        app/
          (javascript files)
        styles/
          (css files)
        views/
          (HTML files)
        package.json (nwjs manifest)

----------

    var Loader = require('nwjs_loader');

    Loader.paths is an object that is as follows
      {
        base:  (absolute path to folder containing nwjs manifest - src in above example),
        app:   (absolute path to src/app),
        views: (absolute path to src/views)
      }

    Loader.ScriptRequire("filename.js") requires "filename.js" from the src/app directory using node's require method

## Release History

* 1.0.0 Initial release
