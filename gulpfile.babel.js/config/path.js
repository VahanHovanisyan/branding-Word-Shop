const srcFolder = "./src/";
const destFolder = "./dist/";

export default {
    src:{
        files:      srcFolder + "files/**/*.*",
        pug:        srcFolder + "pug/*.pug",
        sass:       srcFolder + "sass/*.{scss,sass}",
        js:         srcFolder + "js/*.js",
        img:        srcFolder + "img/**/*.{jpeg,jpg,png,gif,ico,webp,webmanifest,xml,json}",
        svg:        srcFolder + "img/svg/**/*.svg",
        fonts:      srcFolder + "fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        iconFonts:  srcFolder + "icon-fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}"
    },
    dest:{
        files:      destFolder + "files/",
        pug:        destFolder,
        sass:       destFolder + "css/",
        js:         destFolder + "js/",
        img:        destFolder + "img/",
        svg:        destFolder + "img/",
        fonts:      destFolder + "fonts/",
        iconFonts:  destFolder + "icon-fonts/"
    },
    watch:{
        files:      srcFolder + "files/**/*.*",
        pug:        srcFolder + "pug/**/*.pug",
        sass:       srcFolder + "sass/**/*.{scss,sass}",
        js:         srcFolder + "js/**/*.js",
        img:        srcFolder + "img/**/*.{jpeg,jpg,png,gif,ico,webp,webmanifest,xml,json}",
        svg:        srcFolder + "img/svg/**/*.svg",
        fonts:      srcFolder + "fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        iconFonts:  srcFolder + "icon-fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}"
    },
    clean:          destFolder,
    srcFolder:      srcFolder,
    destFolder:     destFolder,
    ftp: ``
}