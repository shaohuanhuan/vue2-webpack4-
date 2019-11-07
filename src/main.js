// index.js
import Vue from '../node_modules/vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

// const root = document.createElement('div')
// document.body.appendChild(root)

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')