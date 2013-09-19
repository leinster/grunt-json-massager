'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.json_massager = {
  simple_inplace_identity: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('test/fixtures/simple.json');
    var expected = grunt.file.readJSON('test/expected/simple.json');
    test.deepEqual(actual, expected, "should have kept all values");

    test.done();
  },
  complex_inplace_identity: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('test/fixtures/complex.json');
    var expected = grunt.file.readJSON('test/expected/complex.json');
    test.deepEqual(actual, expected, "should have kept all values");

    test.done();
  },
  simple_truncated: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('tmp/simple_truncated.json');
    var expected = grunt.file.readJSON('test/expected/simple_truncated.json');
    test.deepEqual(actual, expected, "should have no values");

    test.done();
  },
  simple_modified: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('tmp/simple_modified.json');
    var expected = grunt.file.readJSON('test/expected/simple_modified.json');
    test.deepEqual(actual, expected, "should have modified expected values");

    test.done();
  },
  complex_modified: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('tmp/complex_modified.json');
    var expected = grunt.file.readJSON('test/expected/complex_modified.json');
    test.deepEqual(actual, expected, "should have modified expected values");

    test.done();
  }
};
