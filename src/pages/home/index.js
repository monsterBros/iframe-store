import "./polyfill"
import App from "@/App.vue"
import router  from "@/router"
import store from "@/store"
window._store_ = store

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
window.Vue.use(ElementUI)

new window.Vue({
    router,
    store,
    render: (h)=> h(App)
}).$mount("#app")