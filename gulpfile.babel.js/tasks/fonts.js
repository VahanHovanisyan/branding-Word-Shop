import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export default () => {
    return $.gulp.src($.path.src.fonts)
    .pipe($.plugin.plumber({
        errorHandler: $.plugin.notify.onError(error => ({
            title: "fonts",
            message: error.message
        }))
    }))
    .pipe($.plugin.newer($.path.dest.fonts))
    .pipe(fonter({
        formats: ["woff"]
    }))
    .pipe($.gulp.dest($.path.dest.fonts))
    .pipe($.gulp.src($.path.src.fonts))
    .pipe(ttf2woff2())
    .pipe($.gulp.dest($.path.dest.fonts))
}