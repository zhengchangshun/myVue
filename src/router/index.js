import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

Vue.use(Router)
// 关闭loading
NProgress.configure({ showSpinner: false })// NProgress Configuration

const routes = (req => {
    let alls = req
        .keys()
        .map(key => req(key).default)
    
    let results = [];
    alls.forEach(item => item.map(v => results.push(v)))
    return results;
})(require.context('./', true, /\-route\.js$/))


const router = new Router({
    routes: routes
})


//路由钩子
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

//路由钩子 --- 进入后： 回到顶部
router.afterEach(() => {
    NProgress.done()
    window.scrollTo(0, 0)
})


export default router

