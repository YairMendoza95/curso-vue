let app = new Vue({
    el: '#app',
    data: {
        message: 'Aprende Vue.js fácilmente',
        src: './icon_calendar.svg',
    },
    methods: {
        mostrarMensaje: function () {
            return 'Aprende Vue.js fácilmente - MM';
        },
    },
});
