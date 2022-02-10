var path = require('path');

var dest = './dest'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ
var relativeSrcPath = path.relative('.', src);

module.exports = {
  src: src,
  dest: dest,
  // pug
  pug: {
    src: [
      src + '/pug/**/!(_)*.pug'
    ],
    dest: dest,
    options: {
      basedir: src + '/pug',
      pretty: true,
    }
  },

  // jsのビルド設定
js: {
  src: src + '/assets/js/!(_)*.js',
  dest: dest + '/assets/js',
  uglify: true
},

sass: {
  src: src + '/assets/style/style.sass',
  dest: dest + '/assets/css',
},
//data
data: {
  src: src + '/site.json',
  lead: relativeSrcPath +'/site.json'
},
//w3c html
html: {
  src: dest + '/**/*.html',
  dest: dest,
},
// watch
watch: {
  js: relativeSrcPath + '/assets/js/**.js',
  sass: relativeSrcPath + '/assets/style/**',
  imgmin: relativeSrcPath + '/assets/images/**',
  pug: relativeSrcPath + '/**/*.pug',
  www: relativeSrcPath + '/**'
},
   imagemin: {
     src: [
       src + '/assets/images/**/**.{jpg,png,gif,svg}'
     ],
     dest: dest + '/assets/images'
   },
}
