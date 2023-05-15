export default () => {
    return $.gulp.src($.path.src.iconFonts)
    .pipe($.plugin.plumber({
        errorHandler: $.plugin.notify.onError(error => ({
            title: "fonts",
            message: error.message
        }))
    }))
    .pipe($.plugin.newer($.path.dest.iconFonts))
    .pipe($.gulp.dest($.path.dest.iconFonts))
}