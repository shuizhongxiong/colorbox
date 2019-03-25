const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const replace = require('gulp-replace');
const imagemin = require('gulp-imagemin'); //压缩图片
const cache = require('gulp-cache'); //只压缩修改的图片
const colors = require('colors');
const exec = require('child_process').exec;

const distDir = './dist';
const publishDir = './';
const config = {
  remote: 'https://github.com/shuizhongxiong/colorbox.git',
  branch: 'master'
}

gulp.task('replace-baseHref', function() {
  console.log(colors.green('start replace baseHref'));
  return gulp
    .src([`${distDir}/index.html`])
    .pipe(replace(
      '<base href="/">',
      `<base href="/colorbox/dist/">`
    ))
    .pipe(gulp.dest(distDir));
});

gulp.task('minify-img', function() {
  console.log(colors.green('start minify img'));
  return gulp
    .src([`${distDir}/**/*.{png,jpg,gif,ico,svg}`])
    .pipe(cache(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }), // 隔行扫描 gif 进行渲染
      imagemin.jpegtran({
        progressive: true
      }), // 无损压缩 jpg 图片
      imagemin.optipng(), // {optimizationLevel: 3} 默认：3  取值范围：0-7（优化等级）
      imagemin.svgo({
        plugins: [{
            multipass: true
          }, // 多次优化 svg 直到完全优化
          {
            removeViewBox: false
          }, // 不要移除 svg 的 viewbox 属性
          {
            cleanupIDs: false
          }
        ]
      })
    ], {
      verbose: true
    })))
    .pipe(gulp.dest(distDir));
});

gulp.task('git-init', function(callback) {
  exec('git init', {
    cwd: publishDir
  }, function(error) {
    if (error) {
      console.log(colors.red.underline(error));
    } else {
      console.log(colors.green('仓库初始化成功'));
    }
    callback();
  });
})

gulp.task('git-remote', function(callback) {
  exec(`git remote add origin ${config.remote}`, {
    cwd: publishDir
  }, function(error) {
    if (error) {
      console.log(colors.red.underline(error));
    } else {
      console.log(colors.green('添加远程仓库成功'));
      console.log(colors.yellow.underline('当前远程仓库:' + config.remote));
    }
    callback();
  });
});

gulp.task('git-pull', function(callback) {
  exec(`git pull ${config.remote} ${config.branch}`, {
    cwd: publishDir
  }, function(error) {
    if (error) {
      console.log(colors.red.underline(error));
    } else {
      console.log(colors.green('拉取远程仓库成功'));
      console.log(colors.yellow.underline('拉取远程仓库:' + config.remote));
      console.log(colors.yellow.underline('拉取远程分支:' + config.branch));
    }
    callback();
  });
});

gulp.task('git-checkout', function(callback) {
  exec(`git checkout -b ${config.branch}`, {
    cwd: publishDir
  }, function(error) {
    if (error) {
      console.log(colors.red.underline(error));
    } else {
      console.log(colors.green('切换分支成功'));
      console.log(colors.yellow.underline('当前分支:' + config.branch));
    }
    callback();
  });
});

gulp.task('git-add', function(callback) {
  exec('git add .', {
    cwd: publishDir
  }, function(error) {
    if (error) {
      console.log(colors.red.underline(error));
    } else {
      console.log(colors.green('添加更改文件成功成功'));
    }
    callback();
  });
});

gulp.task('git-commit', function(callback) {
  const info = 'auto push version：' + new Date();
  exec(`git commit -m "${info}"`, {
    cwd: publishDir
  }, function(error) {
    if (error) {
      console.log(colors.red.underline(error));
    } else {
      console.log(colors.green('提交修改成功'));
      console.log(colors.yellow.underline('提交信息:' + info));
    }
    callback();
  });
});

gulp.task('git-push', function(callback) {
  exec(`git push origin ${config.branch}`, {
    cwd: publishDir
  }, function(error) {
    if (error) {
      console.log(colors.red.underline(error));
    } else {
      console.log(colors.green('推送到远程仓库成功'));
    }
    callback();
  });
});

gulp.task('default', gulpSequence('replace-baseHref', 'minify-img', 'git-end'));
// gulp.task('git-start', gulpSequence('git-init', 'git-remote', 'git-pull', 'git-checkout'));
gulp.task('git-end', gulpSequence('git-add', 'git-commit', 'git-push'));
