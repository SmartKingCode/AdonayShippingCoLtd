/*
 * Import Plugins
 */
var gulp = require('gulp'),
        loadPlugins = require('gulp-load-plugins'),
        plugins = loadPlugins(),
            uglify = require('gulp-uglify'),
         bs= require("browser-sync").create(),
        pump = require("pump");

/*
 * 
 * Global Directory data to use
 */

   var paths = {
	srcHTML: '../templates/*.html',
        srcCSS: 'src/**/styles.scss',
        srcJS: 'src/**/**/*.js',
        srcImg: 'src/**/*.+(png|jpg|gif)',

        dist: 'dist/',
        distCSS: 'dist/stylesheets/',
        distJS: 'dist/scripts/',
        distImg: 'dist/images/',
        distFont: 'dist/fonts/',
        distIco: 'dist/icons/'
};










/*
 * STYLESHEET
 * -Compile SCSS
 * -Minify CSS
 * -Save to
 */
gulp.task('styles', function() {
   return  gulp.src(paths.srcCSS)
        .pipe(plugins.sass())
        .pipe(plugins.concat('styles.min.css'))
        .pipe(plugins.cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(paths.distCSS));
});



/*
 * SCRIPT
 * -Concatenate js files data in one 
 * - es2016 to es2015
 * -Minify JS
 * -Save to
 */
gulp.task('scripts', function (cb) {


        pump([
    gulp.src(paths.srcJS),
          // concat('bundle.min.js'),
     plugins.babel({
              presets:['env']
         }),
    uglify(),
          gulp.dest(paths.dist)],cb);
     
        

});


/*
 * IMAGE minify
 */
gulp.task('imagemin', function() {
   
   gulp.src(paths.srcImg)
   .pipe(plugins.changed(paths.dist))
   .pipe(plugins.imagemin())
   .pipe(gulp.dest(paths.dist));
});






/*
 * BROWSER AUTOMATIC RELOAD on CHANGE
 */

gulp.task('browserSync', function() {
  bs.init({
  
       proxy: {
        target: "localhost:8080"
    }
   });
});


/*
 * 
 * WAtch ALL FILES CHANGE
 */
gulp.task('watch', function () {

   gulp.watch(paths.srcCSS,['styles']);
    gulp.watch(paths.srcJS,['scripts']);
     gulp.watch(paths.srcImg,['imagemin']);

});


/*
 * DEFAULT GULP TASK RUNNER
 */
gulp.task('default', ['styles','scripts','imagemin','browserSync','watch']);
