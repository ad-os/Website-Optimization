module.exports = function(grunt){
	grunt.initConfig({
		//reduce the image size.
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						width: 70 ,
						suffix: 'test',
						quality: 10
					}],
				},
				files: [{
					expand: true,
					src: ['profilepic-70-compressed.jpg'],
					cwd: 'grunt_img/',
					dest: 'grunt_img/'
				}]
			}
		},

		//inline css
		critical: {
			test: {
				options: {
					base: './',
					css: [
						'views/css/style.css'
					],
					// width: 320,
					// height: 70
				},
				src: 'views/pizza.html',
				dest: 'views/pizza.html'
			}
		},

		uglify: {
			build: {
				src: 'views/js/*.js',
				dest: 'views/js/script.min.js'
			},
			dev: {
				options: {
					beautify: true,
					mangle: false,
					compress: true,
					preserveComments: 'all'
				},
				src: 'views/js/*.js',
				dest: 'views/js/script.min.js'
			}
		},
		htmlmin: {                                    
			dist: {                                     
				options: {                                 
					removeComments: true,
					collapseWhitespace: true
				},
				files: {                                   
					'index.html': 'index.html',
					'views/pizza.html': 'views/pizza.html'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-critical');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.registerTask('default', ['responsive_images:dev']);
	grunt.registerTask('minifyjs', ['uglify:build']);
	grunt.registerTask('minifyhtml', ['htmlmin']);
}