import webpack from "webpack-stream";
import babel from "gulp-babel";

export default () => {
    return $.gulp.src($.path.src.js, {
            sourcemaps: $.isDev
        })
        .pipe($.plugin.plumber({
            errorHandler: $.plugin.notify.onError(error => ({
                title: "JS",
                message: error.message
            }))
        }))

        .pipe(webpack({
            mode: $.isBuild ? "production" : "development",
            output: {
                filename: "main.min.js"
            }
        }))
        .pipe(babel())
        // .pipe($.plugin.rename({
        //     suffix: ".min"
        // }))
        .pipe($.gulp.dest($.path.dest.js, {
            sourcemaps: $.isDev
        }))
}