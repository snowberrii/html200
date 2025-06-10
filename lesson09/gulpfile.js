"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

// Compile SCSS into CSS and inject into browser
function buildStyles() {
  return gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream()); // Inject updated CSS without full page reload
}

// Start server + watch for file changes
function watchFiles() {
  browserSync.init({
    server: {
      baseDir: "./", // Root folder to serve (must include your index.html)
    },
    port: 3000, // Set your desired port
    open: true, // Auto-open browser
    notify: false, // Optional: disable "Connected to browser-sync" message
  });

  gulp.watch("sass/**/*.scss", buildStyles); // Watch SCSS
  gulp.watch("*.html").on("change", browserSync.reload); // Watch HTML
  gulp.watch("js/**/*.js").on("change", browserSync.reload); // Optional: watch JS
}

exports.buildStyles = buildStyles;
exports.watch = watchFiles;
