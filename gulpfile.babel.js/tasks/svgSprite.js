import svgSprite from "gulp-svg-sprite";

export default () => {
    return $.gulp.src($.path.src.svg)
    .pipe($.plugin.plumber({
        errorHandler: $.plugin.notify.onError(error => ({
            title: "SVG",
            message: error.message
        }))    
    }))
    .pipe(svgSprite({
        mode:{
            stack:{
                sprite: `../sprite.svg`
            }
        }
    }))
    .pipe($.gulp.dest($.path.dest.svg))
}