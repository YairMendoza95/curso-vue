let app = new Vue({
    el: '#app',
    data: {
        message: 'Hola Mundo!!!',
    },
    methods: {
        destruir: function () {
            // El signo de moneda representa un método que nosotros no creamos y que es parte de la libreria
            this.$destroy();
        },
    },  
    beforeCreate: function () {
        console.log('Llamando beforeCreate');
    },
    created: function () {
        console.log('Llamando created');
    },
    beforeMount: function () {
        console.log('Llamando beforeMount');
    },
    mounted: function () {
        console.log('Llamando mounted');
    },
    beforeUpdate: function () {
        console.log('Llamando beforeUpdate');
    },
    updated: function () {
        console.log('Llamando updated');
    },
    beforeDestroy: function () {
        console.log('Llamando beforeDestroy');
    },
    destroyed: function () {
        console.log('Llamando destroyed');
    },
});
