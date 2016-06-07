var gulp = require("gulp");

gulp.task("copy-lib", function() {
    gulp.src("./bower_components/angular/angular.js").pipe(gulp.dest("./lib"));
});

