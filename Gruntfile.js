module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            expand: true, 
            cwd: 'source/bootstrap/js/', 
            src: ['**/*.js'], 
            dest: 'theme/assets/', 
            rename: function(dest, src) {
              // use the source directory to create the file
              // example with your directory structure
              //   dest = 'dev/js/'
              //   src = 'module1/js/main.js'
              return dest + src.substring(0, src.indexOf('/')) + '.js';
            }
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy']);
};