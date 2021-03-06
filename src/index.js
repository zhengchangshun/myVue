// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as filters from './filters'; /*global filters*/
import components from './components';
// 数据mock
import './mock';

Vue.use(ElementUI);

Vue.config.productionTip = false

/*注册全局过滤器*/
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

/*注册全局公共组件*/
Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
    Vue.component(`${name}`, components[key])
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})
