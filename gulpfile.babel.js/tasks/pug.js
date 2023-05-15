import pug from "gulp-pug";
// import news from "../data/news.json"

export default () => {
    return $.gulp.src($.path.src.pug)
    .pipe($.plugin.plumber({
        errorHandler: $.plugin.notify.onError(error => ({
            title: "PUG",
            message: error.message
        }))  
    }))
    .pipe(pug({
        pretty: true,
        // data: {
        //     news: news
        // }
    }))
    .pipe($.gulp.dest($.path.dest.pug))
}