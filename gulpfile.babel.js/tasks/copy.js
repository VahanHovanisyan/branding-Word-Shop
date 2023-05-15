export default () => {
    return $.gulp.src($.path.src.files)
        .pipe($.gulp.dest($.path.dest.files))
}