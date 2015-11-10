import gulp from 'gulp'
import babel from 'gulp-babel'
import nodemon from 'gulp-nodemon'

gulp.task('nodemon', () => {
  nodemon({
    script: 'bootstrap.js',
    watch: ['server', 'themes'],
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('babel', () => {
  gulp.src('./src/server/**/*')
    .pipe(babel())
    .pipe(gulp.dest('./server'))
})

gulp.task('watch', () => {
  gulp.watch('./src/server/**/*', ['babel'])
})

gulp.task('build', ['babel'])

gulp.task('default', ['build', 'watch', 'nodemon'])
