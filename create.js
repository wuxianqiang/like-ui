const path = require('path')
const fs = require('fs')
const name = process.argv[2]

function indexTemplate (name) {
  return (
`
import ${name} from './src/${name}.vue';

${name}.install = function(Vue) {
  Vue.component(${name}.name, ${name});
};

export default ${name};
`
  )
}

function vueTemplate (name) {
  return (
`
<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
  export default {
    name: '${name}',
    data () {
      return {
        msg: 'hello world'
      }
    }
  }
</script>

<style lang="less" scoped>
  .title {
    color: red;
  }
</style>
`
  )
}

function mdTemplate (name) {
  return (
`
# ${name}

::: tip
一句话描述你的组件
:::

### 基本用法

<div class="wrapper"><${name}></${name}></div>

### 代码演示

### ${name} Attributes
| 参数     | 说明       | 类型  | 可选值  | 默认值  |
| -------- | --------- | ----- | ------- | ------ |
| options  | 选项      |   array |   无   |   []   |

### ${name} Events
| 事件名称  | 说明              | 回调参数     |
| -------- | ----------------- | ----------- |
| change   | 文本框内容改变     | 文本框的值   |

### ${name} Methods
| 方法名  | 说明          | 参数        |
| ------ | ------------- | ----------- |
| show   | 显示弹窗       | 无          |
`
  )
}

function hasName (name, list) {
  if (!name) {
    throw new Error('请传入组件名称，如：node create <component-name>')
  }
  if (list.includes(name)) {
    throw new Error(`组件名称已经存在，现有组件列表是：${list.join()}`)
  }
}

fs.readdir('./packages', (err, list) => {
  if (!err) {
    hasName(name, list)
    try {
      fs.mkdirSync(`./packages/${name}`)
      console.log('创建目录', path.resolve(`./packages/${name}`))
    } catch (error) {
      console.log('创建失败')
    }
    try {
      fs.mkdirSync(`./packages/${name}/src`)
      console.log('创建目录', path.resolve(`./packages/${name}/src`))
    } catch (error) {
      console.log('创建失败')
    }
    const defaultVueText = vueTemplate(name)
    fs.writeFile(`./packages/${name}/src/${name}.vue`, defaultVueText, (err) => {
      if (err) {
        console.log('创建失败')
      } else {
        console.log('创建文件', path.resolve(`./packages/${name}/src/${name}.vue`))
      }
    })
    const defaultIndexText = indexTemplate(name)
    fs.writeFile(`./packages/${name}/index.js`, defaultIndexText, (err) => {
      if (err) {
        console.log('创建失败')
      } else {
        console.log('创建文件', path.resolve(`./packages/${name}/index.js`))
      }
    })
    const fileList = `module.exports=${JSON.stringify(list.concat(name))}`
    fs.writeFile('./fileList.js', fileList, (err) => {
      if (!err) {
        const defaultMdText = mdTemplate(name)
        fs.writeFile(`./docs/components/${name}.md`, defaultMdText, (err) => {
          if (!err) {
            console.log('创建文件', path.resolve(`./docs/components/${name}.md`))
          } else {
            console.log('创建失败')
          }
        })
      } else {
        console.log('创建失败')
      }
    })
  }
})
console.log('ok')