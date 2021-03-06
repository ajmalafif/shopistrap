module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            expand: true, 
            flatten: true,
            src: ['source/bootstrap/dist/**/*.min.*', 'source/bootstrap/fonts/*', 'source/shopify-jquery-currencies/jquery.currencies.**'], 
            dest: 'theme/assets/'
          },

          {
            expand: true, 
            flatten: true,
            src: 'source/ajmalafif-bootstrapify/theme/config/settings.html', 
            dest: 'theme/config/'
          },

          {
              expand: true, 
              flatten: true,
              src: 'source/ajmalafif-bootstrapify/theme/layout/*.liquid', 
              dest: 'theme/layout/'
            },

          {
            expand: true, 
            flatten: true,
            src: 'source/ajmalafif-bootstrapify/theme/snippets/*.liquid', 
            dest: 'theme/snippets/'
          },

          {
            expand: true, 
            flatten: true,
            src: 'source/ajmalafif-bootstrapify/theme/templates/*.liquid', 
            dest: 'theme/templates/'
          }

        ]
      }
    },

    sync: {
        main: {
          files: [{
            cwd: 'source/ajmalafif-bootstrapify/theme/',
            src: '**/*',
            dest: 'theme/'
          }
        ]
        // ,
        //   files: [{
        //     cwd: 'source/bootstrap/dist/css/',
        //     src: '*',
        //     dest: 'theme/assets'
        //   }
        // ],
        //   files: [{
        //     cwd: 'source/bootstrap/dist/js/',
        //     src: '*',
        //     dest: 'theme/assets'
        //   }
        // ]
      }
    },

    watch: {
      liquid: {
         files: ['source/ajmalafif-bootstrapify/theme/**/*','source/bootstrap/dist/**/*'],
         tasks: ['sync'],
         options: {
           event: ['added', 'changed']
         }
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sync');

  // Default task(s).
  grunt.registerTask('default', 'watch', 'sync');
};