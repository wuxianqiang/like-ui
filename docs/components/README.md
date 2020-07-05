# 说明文档
### 如何迁移组件
1、在`packages`文件夹添加对应的文件夹，按照规则，以如下的文件结构为例：
```
.
├─ packages
    ├─ BaseButton
    │  ├─ src
    |  |  ├─ BaseButton.vue
    |  |  └─ other.js
    │  └─ index.js
    │  
```
这个过程可以借助命令 `vue create <component-name>` 帮我们自动创建
```
like-ui>node create BaseButton
创建目录 like-ui\packages\BaseButton
创建目录 like-ui\packages\BaseButton\src
创建文件 like-ui\packages\BaseButton\src\BaseButton.vue
创建文件 like-ui\packages\BaseButton\index.js
创建文件 like-ui\docs\components\BaseButton.md
```
2、需要将组件在 `src/index.js`中导入使用
```js {1,7}
import BaseButton from '../packages/BaseButton/index.js';

const components = [
  BaseButton
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    console.log(component.name)
    Vue.component(component.name, component);
  })
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  BaseButton
}
```
3、需要把组件的路径加在components.json中

### 如何编写文档

需要在 `docs` 目录下编写文档，通常是自动创建了（`docs\components\<component-name>.md`），语法参考文档：[vuepress](https://vuepress.vuejs.org/zh/guide/markdown.html#header-anchors)，
```
# <component-name>
组件的说明文档
<component-name></component-name>

## <component-name> Attributes
| 参数     | 说明       | 类型  | 可选值 | 默认值  |
| -------- | --------- | ----- | ------ | ------ |
| options  | 选项      | array |   无   |   []   |

## <component-name> Events
| 事件名称   | 说明              | 回调参数     |
| --------- | ----------------- | ----------- |
| change    | 文本框内容改变     | 文本框的值   |

## <component-name> Methods
| 方法名  | 说明          | 参数        |
| ------ | ------------- | ----------- |
| show   | 显示弹窗       | 无          |
```

### 如何发布npm包

需要先登录 `npm login`（用户名，密码），然后执行 `npm publish`
