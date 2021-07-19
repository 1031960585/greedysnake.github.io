// vue.config.js
// import css from './assets/css/base.css'


const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}



/*** @type {import('@vue/cli-service').ProjectOptions}*/
 
module.exports = {
  // 选项...
  chainWebpack: config => {
    // const oneOfsMap = config.module.rule('scss').oneOfs.store;
    // oneOfsMap.forEach(item => {
    //   item
    //     .use('sass-resources-loader')
    //     .loader('sass-resources-loader')
    //     .options({
    //       // 全局变量资源路径
    //       resources: [
    //         'node_modules/element-plus/packages/theme-chalk/src/base.scss',
    //       ]
    //       // 也可以选择全局变量路径数组, 如果你有多个文件需要成为全局,就可以采用这种方法
    //       // resources: ['./path/to/vars.scss', './path/to/mixins.scss']./src/assets/styles/variable.scss
    //       // 或者你可以将多个scss文件@import到一个main.scss用第一种方法，都是可以的
    //     })
    //     .end()
    // })
    // console.log(config.resolve.alias)
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('views', resolve('./src/views'))
      .set('assets', resolve('./src/assets'))
      .set('components', resolve('./src/components'))
      .set('js', resolve('./src/js'))
    //set第一个参数：设置的别名，第二个参数：设置的路径
  },

  // resolve: {
  //   alias: {
  //     views: path.resolve(__dirname, '@/views/'),
  //     // Templates: path.resolve(__dirname, 'src/templates/'),
  //   },
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.s[ac]ss$/i,
  //       use: [
  //         // Creates `style` nodes from JS strings
  //         "style-loader",
  //         // Translates CSS into CommonJS
  //         "css-loader",
  //         // Compiles Sass to CSS
  //         "sass-loader",
  //       ],
  //     },
  //   ],
  // },


  // pages: {
  //     index: {
  //       // page 的入口
  //       entry: 'src/index/main.js',
  //       // 模板来源
  //       template: 'public/index.html',
  //       // 在 dist/index.html 的输出
  //       filename: 'index.html',
  //       // 当使用 title 选项时，
  //       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //       title: 'Index Page',
  //       // 在这个页面中包含的块，默认情况下会包含
  //       // 提取出来的通用 chunk 和 vendor chunk。
  //       chunks: ['chunk-vendors', 'chunk-common', 'index']
  //     },
  //     // 当使用只有入口的字符串格式时，
  //     // 模板会被推导为 `public/subpage.html`
  //     // 并且如果找不到的话，就回退到 `public/index.html`。
  //     // 输出文件名会被推导为 `subpage.html`。
  //     subpage: 'src/subpage/main.js'
  // }



  devServer: {
    open: true
    // 有关eslint
    //     overlay: {
    //       warnings: true,
    //       errors: true
    //     }
  },
  // lintOnSave: process.env.NODE_ENV !== 'production'

  // 有关css-loader
  // css: {
  //     loaderOptions: {
  //       css: {
  //         // 这里的选项会传递给 css-loader
  //       },
  //       postcss: {
  //         // 这里的选项会传递给 postcss-loader
  //       }
  //     }
  // }


  // 有关插件
  // pluginOptions: {
  //     foo: {
  //       // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
  //     }
  //   }




}