const path = require('path');
const fs = require('fs');
const { parse } = require('fast-plist');

module.exports = function(source) {	
  this.cacheable && this.cacheable();

  const uid = {};

  uid.callback = this.async();
  uid.finalString = source;

  loadTmLanguage(source, uid);
}

function loadTmLanguage(source, self) {
  const parsed = parse(source);

  self.finalString = `module.exports = ${JSON.stringify(parsed)}`;

  self.callback(null, self.finalString);
}