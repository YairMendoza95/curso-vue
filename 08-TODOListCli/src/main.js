import Vue from 'vue';
import App from './App.vue';

export const bus = new Vue({
    methods: {
        actualizarContador(noTasks) {
            this.$emit('actualizarContador', noTasks);
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
});