// Set gulp and gulp plugins variable introduce
const gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat'),
        sourcemaps = require('gulp-sourcemaps'),
        sass = require('gulp-sass');
        cleanCss = require('gulp-clean-css');
        prefix = require('gulp-autoprefixer');


gulp.task("default", function (done) {
  return gulp.src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle : "compressed"}))
    .pipe(sourcemaps.write('maps'))
    //.pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(cleanCss())
    .pipe(gulp.dest("./css"));
    done();
});
