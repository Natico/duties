// "use strict";

// dependencies

const { series, src, dest, watch } = require("gulp");
var sass = require("gulp-sass");
var minifyCSS = require("gulp-clean-css");
// var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var changed = require("gulp-changed");

// - scss/css

var SCSS_SRC = "./src/assets/sass/*.scss";
var SCSS_DEST = "./src/assets/css";
// const watcher = watch(SCSS_SRC, { delay: 2000 });

//compile scss
function compileScss() {
  return src(SCSS_SRC)
    .pipe(sass().on("error", sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(changed(SCSS_DEST))
    .pipe(dest(SCSS_DEST));
}
watch(SCSS_SRC, { delay: 2000 }, function(done) {
  compileScss();
  done();
});
// watcher.on("change", function(path, stats) {
//   compileScss();
// });

exports.default = series(compileScss);
