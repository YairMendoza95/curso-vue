new Vue({
    el: '#app',
    data: {
        contador: 0,
        x: 0,
        y: 0,
    },
    methods: {
        sumarUno: function () {
            this.contador++;
        },
        restarUno: function () {
            this.contador--;
        },
        alerta: function (message) {
            alert(message);
        },
        mostrarUbicacion: function (e) {
            this.x = e.clientX;
            this.y = e.clientY;
        },
        sumar: function (incremento) {
            this.contador += incremento;
        },
        restar: function (incremento) {
            this.contador = this.contador - incremento;
        },
    },
});
