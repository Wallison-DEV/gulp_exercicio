const gulp = require('gulp');

const sass = require ('gulp-sass')(require ('sass'));
const sourcemaps = require ('gulp-sourcemaps');

function compilaSass(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: 'compressed' //essa parte é desnecessária para o geral, apenas minifica o arquivo
            }))
            .pipe(sourcemaps.write('.maps'))
            .pipe(gulp.dest('dist/styles/'))
}
exports.sass = compilaSass;


const uglify = require('gulp-uglify')

function comprimeJS(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}
exports.uglify = comprimeJS;

const imageMin = require('gulp-imagemin')
function comprimeImagens(){
    return gulp.src('src/images/*')
        .pipe(imageMin)
        .pipe(gulp.dest('dist/images'))
}
exports.imageMin = imageMin