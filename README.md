推荐使用按需加载后编译的方式
```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "like-ui",
        "camel2Dash": false,
        "style": false,
        "libDir": "packages"
      }
    ]
  ]
}
```
把安装包添加到编译的目录中
```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // 注意这里的 include
        // 除了 src 还包含了额外的 node_modules 下的1个包
        include: [
            resolve('src'),
            resolve('node_modules/like-ui')
          ]
      }
    ]
  }
}
```
