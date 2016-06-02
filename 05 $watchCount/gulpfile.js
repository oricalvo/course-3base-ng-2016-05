var gulp = require("gulp");
var minify = require('gulp-minify');

gulp.task('compress', function() {
    gulp.src('*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
        }))
        .pipe(gulp.dest('dist'))
});