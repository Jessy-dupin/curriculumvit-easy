var gulp    = require('gulp');
//var less    = require('gulp-less');
var sass    = require('gulp-sass');
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
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(distFolder + './css'));
  
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
  // gulp.watch([appFolder + 'less/**/*.less'], ['less']);
  gulp.watch([appFolder + './sass/**/*.scss'], ['sass']);
  gulp.watch([appFolder + '**/*.ts'], ['ts']);
  gulp.watch(staticFiles, ['static']);
});

gulp.task('build', ['ts', 'sass', 'static']);

gulp.task('default', ['build', 'connect', 'watch']);