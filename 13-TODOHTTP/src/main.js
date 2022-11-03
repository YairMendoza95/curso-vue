import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

// Configuración para utilizar peticiones HTTP
Vue.use(VueResource);
Vue.http.options.root = 'https://todolist-dc171-default-rtdb.firebaseio.com';

export const bus = new Vue({
    methods: {
        actualizarContador(numTasks) {
            this.$emit('actualizarContador', numTasks);
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
});