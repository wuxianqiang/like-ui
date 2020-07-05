const path = require('path')
const Components = require('../components.json');
const Assets = require('../assetsList.json');
const NAME = 'like-ui'

// 拍照别名
exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  [NAME]: path.resolve(__dirname, '../'),
  mixins: path.resolve(__dirname, '../src/assets/less')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;

// 忽略vue,moment,vue-date-range文件
const externals = {
  moment: 'moment',
  vue: 'vue',
  'vue-date-range': 'vue-date-range'
};

// 忽略内部组件
Object.keys(Components).forEach(function(key) {
  externals[`${NAME}/packages/${key}`] = `${NAME}/lib/${key}`;
});

// 忽略静态文件
Object.keys(Assets).forEach(function(key) {
  // externals[`assets/js/${key}`] = `assets/js/${key}`
  externals[`assets/js/${key}`] = `${NAME}/lib/utils/${key}`;
});

// network不进行打包
externals[`assets/js/network`] = `assets/js/network`;

exports.externals = externals
