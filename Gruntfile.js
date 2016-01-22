'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/styles.css': 'scss/styles.scss'
        }
      }
    },

    connect: {
      server: {
        options: {
          hostname: '127.0.0.1',
          port: 9000,
          base: '.',
          livereload: true
        }
      }
    },

    open: {
      dist: {
        path: 'http://127.0.0.1:9000'
      }
    },

    watch: {
      css: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: ['js/**/*.js', 'js/app.js']
      },
      html: {
        files: '**/*.html'
      },
      options: {
        livereload: true
      }
    }
  });

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('serve', ['connect', 'open', 'watch']);
};
