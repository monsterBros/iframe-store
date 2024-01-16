import "./polyfill"
import ConfigPage from '@/views/config-page.vue'

import "element-ui/lib/theme-chalk/index.css"
console.log('window.vue', window)
new window.Vue({
    store: window.store,
    render(){
        return <ConfigPage />
    }
}).$mount(document.getElementById("prop"))