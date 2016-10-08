var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks-render');
var data = require('gulp-data');

gulp.task('nunjucks', function() {
    return gulp.src('src/*.html')
        .pipe(data(function() {
            return require('../json/index.json')
        }))
        .pipe(nunjucks(
            {
                path: ['src/']
            }
        ))
        .pipe(gulp.dest('build/'));
});

gulp.task('nunjucks:watch', function () {
    gulp.watch('src/json/*.json', ['nunjucks']);
    gulp.watch('src/**/*.html', ['nunjucks']);
});