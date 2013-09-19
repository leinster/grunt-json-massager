/*
 * grunt-json-massager
 * https://github.com/leinster/grunt-json-massager
 *
 * Copyright (c) 2013 Jon Ramsey
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var clone = function(obj) {
    return JSON.parse(JSON.stringify(obj));
  };

  var debug = function(label, obj) {
    grunt.log.debug(label + ":\n" + JSON.stringify(obj, null, 2));
  };

  grunt.registerMultiTask('json_massager', 'Modify JSON files with functions.', function() {
    var obj, modified, json;
    this.files.forEach(function(file) {
      obj = grunt.file.readJSON(file.src);
      modified = this.data.modifier(clone(obj));
      json = JSON.stringify(modified, null, 2);
      grunt.file.write(file.dest, json);
      grunt.log.oklns('JSON file "' + file.src +
                      '" modified and written to "' + file.dest + '".');
      debug("Original JSON", obj);
      debug("Modified JSON", modified);
    }.bind(this));
  });
};
