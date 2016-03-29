var gulp    = require('gulp');
<<<<<<< HEAD
var less    = require('gulp-less');
//var sass    = require('gulp-sass');
=======
//var less    = require('gulp-less');
var sass    = require('gulp-sass');
>>>>>>> 93c9441d0e47cebd9f654f7f3971299422e47a44
var connect = require('gulp-connect');
var ts      = require('gulp-typescript');
var gutil   = require('gulp-util');

var tsProject = ts.createProject('tsconfig.json');

var appFolder  = 'app/',
    distFolder = 'dist/';

var staticFiles = [
  appFolder + '**/*.html',
  appFolder + '**/*.jpg',
  appFolder + '**/*.png',
];

<<<<<<< HEAD
gulp.task('less', function () {
  return gulp.src(appFolder + 'less/style.less')
    .pipe(less().on('error', function(err){
      gutil.log(err);
      this.emit('end');
    }))
    .pipe(gulp.dest(distFolder + 'css'))
    .pipe(connect.reload());
=======

// gulp.task('less', function () {
//   return gulp.src(appFolder + 'less/style.less')
//     .pipe(less().on('error', function(err){
//       gutil.log(err);
//       this.emit('end');
//     }))
//     .pipe(gulp.dest(distFolder + 'css'))
//     .pipe(connect.reload());
// });

gulp.task('sass', function () {
  return gulp.src(appFolder + 'sass/screen.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(distFolder + 'css'));
  
>>>>>>> 93c9441d0e47cebd9f654f7f3971299422e47a44
});

gulp.task('ts', function() {
  var tsResult = gulp.src(appFolder + '**/*.ts')
    .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest(distFolder))
    .pipe(connect.reload());
});

gulp.task('static', function() {
  gulp.src(staticFiles)
    .pipe(gulp.dest(distFolder))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('watch', function () {
<<<<<<< HEAD
  gulp.watch([appFolder + 'less/**/*.less'], ['less']);
=======
  // gulp.watch([appFolder + 'less/**/*.less'], ['less']);
  gulp.watch([appFolder + './sass/**/*.scss'], ['sass']);
>>>>>>> 93c9441d0e47cebd9f654f7f3971299422e47a44
  gulp.watch([appFolder + '**/*.ts'], ['ts']);
  gulp.watch(staticFiles, ['static']);
});

<<<<<<< HEAD
gulp.task('build', ['ts', 'less', 'static']);
=======
gulp.task('build', ['ts', 'sass', 'static']);
>>>>>>> 93c9441d0e47cebd9f654f7f3971299422e47a44

gulp.task('default', ['build', 'connect', 'watch']);