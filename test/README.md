# Jekyll-Jacman

**中文 | [English](/README_en.md)**

Jekyll-Jacman 是为 [Jekyll](http://jekyllrb.com) 设计的一款清新且具有响应式的主题，拥有更丰富的特性并支持了很多的国内服务。Jacman 始于 [Hexo Jacman](https://github.com/wuchong/jacman) 移植而来。

 * [主题演示](http://simpleyyt.github.io/jekyll-jacman/)
 * [Yitao's Blog](http://simpleyyt.github.io)
 * [如何使用 Jacman 主题](http://simpleyyt.github.io/jekyll-jacman/jekyll/2015/09/20/how-to-use-jacman)

##本地搭建

确保已安装`Ruby 2.1.0` 或更高版本：

```sh
ruby --version
```

安装`Bundler`：

```sh
gem install bundler
```

下载 Jacman 主题：

```sh
git clone https://github.com/Simpleyyt/jekyll-jacman.git
cd jekyll-jacman
```

安装依赖：

```sh
bundle install
```

运行 Jekyll：

```sh
bundle exec jekyll server
```

更多细节可以参考：[Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)

##功能
- **菜单 menu**  
 主导航菜单
- **控件 widget**  
 侧边栏的控件。包括：Github 名片	、分类、标签、RSS、友情链接、微博秀。
- **图片相关 Image**  
 设置网站图标、网站logo、作者头像、博客顶部大图等。还提供了多种图片样式`img-logo`,`img-topic`,`img-center`等。
- **首页模式 index**  
 主题提供了两种首页展示模式。
- **作者 author**  
 作者信息，主要用于展示网站右下角的社交网络链接。包括：微博、豆瓣、知乎、邮箱、GitHub、StackOverflow、Twitter、Facebook、Linkedin、Google+。
- **目录 toc**  
 在文章中和侧边栏可以显示目录。
- **评论 comments**  
 支持 [多说](http://duoshuo.com/) & [disqus](https://disqus.com/) 评论。
- **分享 jiathis**  
 启用 内建分享工具 或 [加网](http://www.jiathis.com/) 分享系统。
- **网站统计 Analytiscs**  
 支持 [谷歌统计](http://www.google.com/analytics/) & [百度统计](http://tongji.baidu.com/) & [CNZZ站长统计](http://www.cnzz.com/)。
- **Search**  
 支持 [谷歌自定义搜索](https://www.google.com/cse/ ) & [百度站内搜索](http://zn.baidu.com/)  &[微搜索](http://tinysou.com/)。
- **totop**  
 回到顶部。
- **rss**  
 RSS 订阅链接。
- **fancybox**  
 图片查看的 [Fancybox](http://fancyapps.com/fancybox/) 工具。
- **其他**
 你可以设置侧边栏在博文页面中不显示。

##关于 Kramdown 引擎
由于 Github 不再支持原来的 redcarpet，因此每次更新时都会有 Page build warning 发到邮件。我新建了一个分支 kramdown，把 Markdown 引擎换成了 kramdown，把高亮换成了 rough。但是，kramdown 的 markdown 语法比较严格，我不喜欢。所以，你也可以像我一样建个规则过滤 Page build warning 邮件。

##协议
[MIT](/LICENSE)

##捐赠

支付宝捐赠链接还是要有的，万一真的有人捐呢。

![支付宝扫码捐赠](http://p1.bpimg.com/567571/9a4a158daee8aa69.png)
