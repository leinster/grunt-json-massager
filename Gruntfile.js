/*
 * grunt-json-massager
 * https://github.com/leinster/grunt-json-massager
 *
 * Copyright (c) 2013 Jon Ramsey
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    clean: {
      tests: ['tmp'],
    },

    json_massager: {
      simple_inplace_identity: {
        files: {
          'test/fixtures/simple.json': ['test/fixtures/simple.json']
        },
        modifier: function(obj) {
          return obj;
        }
      },
      complex_inplace_identity: {
        files: {
          'test/fixtures/complex.json': ['test/fixtures/complex.json']
        },
        modifier: function(obj) {
          return obj;
        }
      },
      simple_truncate: {
        files: {
          'tmp/simple_truncated.json': ['test/fixtures/simple.json']
        },
        modifier: function(obj) {
          return {};
        }
      },
      simple_modifed: {
        files: {
          'tmp/simple_modified.json': ['test/fixtures/simple.json']
        },
        modifier: function(obj) {
          obj.a = "different string";
          obj.b = 2;
          delete obj.c;
          delete obj.d;
          delete obj.f;
          delete obj.g;
          delete obj.h;
          return obj;
        }
      },
      complex_modified: {
        files: {
          'tmp/complex_modified.json': ['test/fixtures/complex.json']
        },
        modifier: function(obj) {
          obj.a.pop();
          obj.b.c = 2;
          obj.b.e = "string";
          delete obj.b.d;
          obj.d = {
            f: [4,5,6]
          };
          return obj;
        }
      }
    },

    nodeunit: {
      tests: ['test/*_test.js'],
    },

    watch: {
      test: {
        files: ['Gruntfile.js', 'tasks/**/*js', 'test/**/*test.js'],
        tasks: ['default']
      }
    }
  });

  grunt.loadTasks('tasks');

  // load all grunt tasks from package.json
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'json_massager', 'nodeunit']);

  grunt.registerTask('default', ['jshint', 'test']);
};
