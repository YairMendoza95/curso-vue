import Vue from 'vue'
import App from './App.vue'

// Filtro global
Vue.filter('suspensivos', texto => texto.substring(0, 10) + '...');

new Vue({
    el: '#app',
    render: h => h(App)
})