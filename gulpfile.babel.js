import gulp from 'gulp';
import terser from 'gulp-terser';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import clean from 'gulp-purgecss';

//variables
const cssPlugins = [
    cssnano(),
    autoprefixer()
]

/* TAREA MINIMIZAR JS Y OPTIMIZAR PARA NAVEGADOR  */
gulp.task('babel',()=>{
    return gulp
        .src('./BabelJS/src/**/*.js')
        .pipe(babel())
        .pipe(terser())
        .pipe(rename(function(path){
            path.basename += '-min'
            path.extname = '.js'
        }))
        .pipe(gulp.dest('./BabelJS/public'))
})

/* TAREA PARA MIRIFICAR Y PREFIJAR CSS */
gulp.task('mincss',()=>{
    return gulp
        .src('./MinPrefixCss/src/**/*.css')
        .pipe(postcss(cssPlugins))
        .pipe(rename(function(path){
            path.basename += '-min'
            path.extname = '.css'
        }))
        .pipe(gulp.dest('./MinPrefixCss/public'))
})



/* TAREA PARA MIRIFICAR Y PREFIJAR CSS Y LIMPIAR */
gulp.task('purgecss',()=>{
    return gulp
        .src('./PurgeCss/src/css/**/*.css')
        .pipe(clean({
            content: ['./PurgeCss/src/html/**/*.html']
        }))
        .pipe(postcss(cssPlugins))
        .pipe(rename(function(path){
            path.basename += '-min'
            path.extname = '.css'
        }))
        .pipe(gulp.dest('./PurgeCss/public'))
})



/* TARE MINIMIZAR HTML */
gulp.task('htmlmin',()=>{
    return gulp
        .src('./HtmlMin/src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace:true,
            removeComments:true,
        }))
        .pipe(gulp.dest('./HtmlMin/public'))
})