var gulp = require('gulp');

gulp.task('copy', function() {
    return gulp
        .src('src/js/**/*.js')
        .pipe(gulp.dest('build/js'));
});

gulp.task('copy', function() {
    return gulp
        .src('src/img/*.{jpg,png}')
        .pipe(gulp.dest('build/img'));
});
gulp.task('copy', function() {
    return gulp
        .src('src/js/*.js')
        .pipe(gulp.dest('build/js'));
});


gulp.task('copy:watch', function () {
    gulp.watch('src/js/**/*.js', ['copy']);
    gulp.watch('src/img/*.{jpg,png}', ['copy']);
    gulp.watch('src/js/*.js', ['copy'])
});