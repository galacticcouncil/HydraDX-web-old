const browserify = require('browserify');
const gulp = require('gulp');
const log = require('gulplog');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const generateJs = function() {
    return new Promise(resolve => {
        log.info('Generating JS');

        const devMode = this.config.devMode;

        var b = browserify({
            entries: './js/main.js',
            debug: devMode
        });

        let stream = b.bundle()
            .pipe(source('main.js'))
            .pipe(buffer());

        if (!devMode) {
            stream = stream.pipe(uglify());
        }

        stream
            .pipe(gulp.dest(this.outputDirectory))
            .on('end', resolve);
    });
}

const watchJS = function() {
    gulp.watch(
        './js/**/*.js',
        gulp.series(generateJs.bind(this), this.reloadBrowser.bind(this))
    )
}

module.exports = function (emitter) {
    emitter.on('AFTER:GenerateCss', generateJs.bind(this));
    emitter.on('AFTER:OnServe', watchJS.bind(this));
}
