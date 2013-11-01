module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            expand: true, 
            cwd: 'source/bootstrap/js/', 
            src: ['*.js'], 
            dest: 'theme/assets/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy']);
};