// import the main module
import browserSync from "browser-sync";
import gulp from "gulp";
import ghPages from "gulp-gh-pages";

// import paths
import path from "./config/path.js"
import plugin from "./config/plugin.js"

// passing values ​​to global variable
global.$ = {
    isBuild: process.argv.includes("--production"),
    isDev: !process.argv.includes("--production"),
    path,
    gulp,
    browserSync,
    plugin
}

// server
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.destFolder
        }
    })
}

const ghPage = () => {
    return gulp.src(path.destFolder + "**/*")
    .pipe(ghPages())
}

// watcher
const watcher = () => {
    gulp.watch(path.watch.files, copy).on("all", browserSync.reload)
    gulp.watch(path.watch.pug, pug).on("all", browserSync.reload)
    gulp.watch(path.watch.sass, sass).on("all", browserSync.reload)
    gulp.watch(path.watch.js, js).on("all", browserSync.reload)
    gulp.watch(path.watch.img, img).on("all", browserSync.reload)
    gulp.watch(path.watch.svg, svgSprite).on("all", browserSync.reload)
    gulp.watch(path.watch.fonts, fonts).on("all", browserSync.reload)
    gulp.watch(path.watch.iconFonts, iconFonts).on("all", browserSync.reload)
}

// import tasks
import reset from "./tasks/reset.js";
import copy from "./tasks/copy.js";
import pug from "./tasks/pug.js";
import sass from "./tasks/sass.js";
import js from "./tasks/js.js";
import img from "./tasks/img.js";
import svgSprite from "./tasks/svgSprite.js";
import fonts from "./tasks/fonts.js";
import iconFonts from "./tasks/iconFonts.js";

const mainTasks = gulp.parallel(copy, pug, sass, js, img, svgSprite, fonts, iconFonts) 

// npm run dev
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
export {dev}

// npm run build
const build = gulp.series(reset, mainTasks, ghPage)
export {build}

export default $.isBuild ? build : dev;