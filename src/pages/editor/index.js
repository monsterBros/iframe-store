import "./polyfill"
import DesingPage from '@/views/design-page.vue'
import "element-ui/lib/theme-chalk/index.css"
console.log('editor index')
new window.Vue({
    store: window.store,
    render(){
        return <DesingPage></DesingPage>
    }
}).$mount(document.getElementById("editor"))