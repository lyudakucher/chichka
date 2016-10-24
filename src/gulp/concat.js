/**
 * Created by air on 09.10.16.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    return gulp.src('/src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('/build/js'));
});