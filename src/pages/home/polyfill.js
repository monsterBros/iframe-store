import Vue from 'vue/dist/vue.esm.js'
import SanboxVue from '@/views/sanbox-vue.js'

if(window.parent == window){
    window.Vue = Vue
    window.SanboxVue = SanboxVue
}