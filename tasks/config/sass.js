/**
 * Compiles LESS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-less
 */
module.exports = function(grunt) {

	grunt.config.set('sass', {
		dev: {
    		options: {
     			style: 'expanded', //Set your prefered style for development here.
     			loadPath: 'node_modules/bootstrap-sass/assets/stylesheets/'
    		},
	    	files: [
	    	// {
	     //  		expand: true,
	     //  		cwd: 'node_modules/bootstrap-sass/assets/stylesheets/',
	     //  		src: ['*.scss'], // Feel free to remove a format if you do not use it.
	     //  		dest: '.tmp/public/styles/',
	     //  		ext: '.css'
	    	// },
	    	{
	      		expand: true,
	      		cwd: 'assets/styles/',
	      		src: ['importer.scss'], // Feel free to remove a format if you do not use it.
	      		dest: '.tmp/public/styles/',
	      		ext: '.css'
	    	}]
  		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
};



// module.exports = function(grunt) {

// 	grunt.config.set('less', {
// 		dev: {
// 			files: [{
// 				expand: true,
// 				cwd: 'assets/styles/',
// 				src: ['importer.less'],
// 				dest: '.tmp/public/styles/',
// 				ext: '.css'
// 			}]
// 		}
// 	});

// 	grunt.loadNpmTasks('grunt-contrib-less');
// };


// sass: {
//   dev: {
//     options: {
//       style: 'expanded' //Set your prefered style for development here.
//     }
//     files: [{
//       expand: true,
//       cwd: 'assets/styles/',
//       src: ['*.scss', '*.sass'], // Feel free to remove a format if you do not use it.
//       dest: '.tmp/public/styles/',
//       ext: '.css'
//     }, {
//       expand: true,
//       cwd: 'assets/linker/styles/',
//       src: ['*.scss', '*.sass'], // Feel free to remove a format if you do not use it.
//       dest: '.tmp/public/linker/styles/',
//       ext: '.css'
//     }
//     ]
//   }
// },
