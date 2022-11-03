import Vue from 'vue';
import App from './App.vue';

// Directiva global
Vue.directive('decorar', {
    bind(el, binding, vnode) {
        // (elemento html, argumentos enviados, vnodo donde se encuentra el elemento)
        // Para poder hacer uso de los atributos de la directiva se usa el binding
        el.style.fontFamily = binding.value;

        // Para reconocer los modificadores se evalua si existen en el código
        if (binding.modifiers['negrita']) {
            el.style.fontWeight = 'bold';
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
});