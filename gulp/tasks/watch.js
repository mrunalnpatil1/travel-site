var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){
  /*whenever we save anything*/

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

/*whenever we save index.html file*/
  watch('./app/index.html', function(){
    browserSync.reload();
  });

/*whenever we save any stylesheet in styles folder*/
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  });

});

/*before beginning with cssInject, completes the dependencies 'styles'. So, 'styles' task is dependency of 'cssInject' task*/
gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});
