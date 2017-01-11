"use strict";

const appBasePath = nw.__dirname;
const appScriptPath = appBasePath + "app\\";
const appViewPath = appBasePath + "views\\";

exports.ScriptRequire = function(file){
  return require(appScriptPath+file);
}

exports.paths = {
  root: appBasePath,
  app: appScriptPath,
  views: appViewPath
}
