module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'client/dist/app.js': ['client/js/**.js']
        }
      }
    },

    nodemon: {
      dev: {
        script: 'index.js'
      }
    },

    watch: {
      server: {
        files: [ 'client/js/*.js' ],
        tasks: [ 'browserify', 'express:dev' ],
        options: {
          spawn: false
        }
      }
    },

    express: {
      dev: {
        options: {
          script: 'index.js'
        }
      }
    },
  });

  grunt.registerTask('build', [
    'browserify'
  ]);

  grunt.registerTask('server', [
    'express:dev'
  ]);

  grunt.registerTask('default', [
    'build',
    'nodemon'
  ]);
};