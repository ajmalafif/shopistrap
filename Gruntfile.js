module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            expand: true, 
            flatten: true,
            src: ['source/bootstrap/dist/**/*.min.*', 'source/bootstrap/fonts/*'], 
            dest: 'theme/assets/'
          },
          {
            expand: true, 
            flatten: true,
            src: 'source/shopify-skeleton-theme/templates/*.liquid', 
            dest: 'theme/templates/'
          }

        ]
      }
    }
    //, concat: {
    //     bootstrap: {
    //       src: [
    //         'source/bootstrap/js/transition.js',
    //         'source/bootstrap/js/alert.js',
    //         'source/bootstrap/js/button.js',
    //         'source/bootstrap/js/carousel.js',
    //         'source/bootstrap/js/collapse.js',
    //         'source/bootstrap/js/dropdown.js',
    //         'source/bootstrap/js/modal.js',
    //         'source/bootstrap/js/tooltip.js',
    //         'source/bootstrap/js/popover.js',
    //         'source/bootstrap/js/scrollspy.js',
    //         'source/bootstrap/js/tab.js',
    //         'source/bootstrap/js/affix.js'
    //       ],
    //       dest: 'theme/assets/bootstrap.js'
    //     }
    // },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['copy']);
};