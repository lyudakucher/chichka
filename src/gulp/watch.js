/**
 * Created by air on 01.09.16.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'build'
        },
    })
})

gulp.task('watch',
    [
        'scss:watch',
        'nunjucks:watch',
        'copy:watch'
    ]
);

gulp.task('watch', ['browserSync', 'scss:watch', 'nunjucks:watch', 'copy:watch'], function (){
    gulp.watch('build/css/*.css', browserSync.reload);
    gulp.watch('build/*.html', browserSync.reload);
    gulp.watch('build/img/*', browserSync.reload);
    gulp.watch('build/js/*', browserSync.reload);
});