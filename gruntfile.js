module.exports= function(grunt){
    //Configuration 
    grunt.initConfig({

        //pass in optinal to plugins,referance to files etc
        concat: {
            js: {
                src:['assets/js/*.js'],
                dest:'build/scripts.js'
            },
            css: {
                src:['assets/css/*.css'],
                dest:'build/styles.css'
            }
        },

        sass : {
            build:{
                files: [{
                    src:'assets/sass/mainapp.scss',
                    dest: 'assets/css/app.css'
                }]
            }
        },

        uglify:{
            build:{
                files: [{
                    src:'build/scripts.js',
                    dest: 'build/scripts.js'
                }]
            }
        },

        minified:{
             files:{
                    src:'assests/css/style.css',
                    dest:'assests/css/stylemin.css' 
                   } 
            },

            imagemin: {
                dist: {
                    options: {
                        progressive: true,
                        optimizationLevel: 5
                    },
                    files: [{
                        expand: true,
                        cwd: '../assets/image/',
                        src: ['assets/image.{png,jpg,gif,svg,jpeg}'],
                        dest: 'assets/build/optimizedimg/'
                    }]
                }
            }
            
        
    });

    //Load Plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-minified');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    //Register tasks
    grunt.registerTask('concat-js',['concat:js']);
    grunt.registerTask('concat-css',['concat:css']);
    grunt.registerTask('image-min', ['imagemin']);
};