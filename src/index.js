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
