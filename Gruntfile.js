module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    banner: '',
    game_name : '<%=pkg.project_name%>',//项目名字
    //清除目录
    clean: {
      all: ['project/view/<%=game_name%>/**', 'project/*.*'],
      image: 'project/static/<%=game_name%>/res',
      css: 'project/static/<%=game_name%>/css',
      js: 'project/static/<%=game_name%>/js',
      html: 'project/view/<%=game_name%>/*'
    },

    copy: {
      src: {
        files: [
          {expand: true, cwd: 'dev/view/<%=game_name%>', src: ['*.html'], dest: 'project/view/<%=game_name%>'},
          // {expand: true, cwd: 'dev/lib/js', src: ['**/*.js'], dest: 'project/lib/js'},
          {expand: true, cwd: 'dev/static/common', src: ['**/*.{css,js,mp3,ogg,wav,fnt,plist}'], dest: 'project/static/common'}
        ]
      },
      image: {
        files: [
          {expand: true, cwd: 'dev/static/<%=game_name%>', src: ['res/**/*.{png,jpg,jpeg,gif,mp3,ogg,wav,fnt,plist,json}'], dest: 'project/static/<%=game_name%>'}
        ]
      }
    },

    // 文件合并
    concat: {
      options: {
        separator: '',//分隔符号
        stripBanners: true,//允许添加头部
        //在头部添加 js文件名和时间的注释
        banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      js: {
        src: [
          "dev/static/<%=game_name%>/js/*.js"
        ],
        // dest: "project/html/js/game.min.js"
        dest: "project/static/<%=game_name%>/js/game.min.js"
      },
      js: {
        src: [
          "dev/lib/js/<%=pkg.base_root[pkg.base_root_index]%>/*.js",
          "dev/lib/js/zepto_iscroll_fastclick/*.js",
          "dev/static/common/js/*.js"
        ],
        dest: "project/static/<%=game_name%>/js/lib.min.js"
      },
      css:{
        src: [
          "dev/static/<%=game_name%>/css/*.css", "dev/static/common/css/*.css", "dev/lib/css/*.css"
        ],
        dest: "project/static/<%=game_name%>/css/game.min.css"
      }
    },

    //压缩JS
    uglify: {
      prod: {
          files: {
            'project/static/<%=game_name%>/js/game.min.js': ['dev/static/<%=game_name%>/js/*.js', '!dev/static/<%=game_name%>/js/*.min.js']
          }
      }
    },

    //这种方法需要将上一步合并的操作生成文件改成libs.min.js
    // uglify: {
    //   build: {
    //     src: 'dest/libs.min.js',
    //     dest: 'dest/game.min.js'
    //   }
    // },

    //压缩CSS
    cssmin: {
      prod: {
        options: {
          report: 'gzip'
        },
        files: [
          {
            expand: true,
            cwd: 'project/static/<%=game_name%>',
            src: ['css/*.css'],
            dest: 'project/static/<%=game_name%>'
          }
        ]
      }
    },

    //压缩图片
    imagemin: {
      prod: {
        options: {
          optimizationLevel: 7,
          pngquant: true
        },
        files: [
          {expand: true, cwd: 'project/static/<%=game_name%>', src: ['res/**/*.{png,jpg,jpeg,gif,webp,svg}'], dest: 'project/static/<%=game_name%>'}
        ]
      }
    },

    rev: {
          options: {

          algorithm: 'sha1',

          length: 8

          },  

          assets: {

              files: [{

                  src: [
                      'project/static/<%=game_name%>/**/*.{css,jpg,jpeg,gif,png,js}'
                  ]   

              }]  

          }   
    },

    // 处理html中css、js 引入合并问题
    usemin: {
      // options: {
      //   assetsDirs: [
      //       '../../static/<%=game_name%>/res/img/*',
      //       '../../static/<%=game_name%>/css/*',
      //       '../../static/<%=game_name%>/js/*'
      //   ],
      //   patterns: {
      //       js: [[/([\w-]+\.png)/, 'replace image in js']]
      //   }
      // },
      html: 'project/view/<%=game_name%>/*.html'
    },

    //压缩HTML
    htmlmin: {
      options: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true
      },
      html: {
        files: [
          {expand: true, cwd: 'project/view/<%=game_name%>', src: ['*.html'], dest: 'project/view/<%=game_name%>'}
        ]
      }
    }

  });


  grunt.registerTask('prod', [
    'copy',                 //复制文件
    'concat',               //合并文件
    'imagemin',             //图片压缩
    'cssmin',               //CSS压缩
    'uglify',               //JS压缩
    // 'rev',                  //重置文件名
    'usemin',               //HTML处理
    // 'htmlmin',              //HTML压缩
  ]);

  grunt.registerTask('build', ['clean', 'prod']);
};