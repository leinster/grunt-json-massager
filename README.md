# grunt-json-massager

Modify JSON files with functions.

## Installation
This plugin requires Grunt `~0.4.1`

Install grunt-json-massager with npm:

```shell
npm install grunt-json-massager --save-dev
```

and enable the plugin in your Gruntfile with:

```js
grunt.loadNpmTasks('grunt-json-massager');
```

## Usage

### Overview
In your project's Gruntfile, add a section named `json_massager` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json_massager: {
    your_target: {
      files: {
        'build/some.json': ['build/some.json']
      },
      modifier: function(obj) {
        obj.password = passwordFromScope;
        delete obj.REMOVE_ME;
        return obj;
      }
    },
  },
})
```

### Properties

#### files
A **src-dest** [file mapping](http://gruntjs.com/configuring-tasks#files). **dest** may be equal to **src** for in-place edits.

#### modifier
The function that modifies and returns the parsed object. See above.

## Release History
 * 2013-09-19   v0.1.0   It does what it needs to do.

## License

Copyright (c) 2013 Jon Ramsey

Licensed under the [MIT license](LICENSE-MIT).
