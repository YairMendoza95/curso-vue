let asignaciones = [{
    fechaSolicitud: '01/05/2021',
    grupoEconomico: 'XXX',
    acreditados: 1,
    acreditadosInfo: [{
        nombre: 'XYz',
        origenAdeudo: 'XX',
        noCredito: 123,
        tipoCredito: 'Tipo 1',
        division: 'División 1',
        ejecutivo: 'Ejecutivo 1',
        abogado: 'Abogado 1',
    }]
}];

new Vue({
    el: '#app',
    data: {
        title: 'Alta Nueva Asignación',
        subtitle: '1. Ficha General Crédito',
        campos: {
            fecha: '1. Fecha Solicitud WO',
            grupo: '2. Grupo Económico',
            acreditados: '3. N° de Acréditados',
        },
        acreditadosDisponibles: [1, 2, 3, 4, 5],
        tipoCredito: ['Tipo 1', 'Tipo 2', 'Tipo 3'],
        divisiones: ['División 1', 'División 2', 'División 3'],
        ejecutivos: ['Ejecutivo 1', 'Ejecutivo 2', 'Ejecutivo 3'],
        abogados: ['Abogado 1', 'Abogado 2', 'Abogado 3'],
        asignaciones,
        asignacion: {
            fechaSolicitud: '',
            grupoEconomico: '',
            acreditados: 1,
            acreditadosInfo: [{}]
        },
    },
    methods: {
        guardarInfo: function() {
            this.asignaciones.push(this.asignacion);
            const { fechaSolicitud, grupoEconomico, acreditados, acreditadosInfo } = this.asignaciones;
            console.log(JSON.stringify(this.asignaciones));
        },
        agregarAcreditados: function(e) {
            this.asignacion.acreditadosInfo = [];
            acreditados = parseInt(e.target.value);

            this.asignacion.acreditados = acreditados;
            console.log(this.asignacion.acreditados);


            for (let index = 0; index < acreditados; index++) {
                const acreditado = {
                    nombre: '',
                    origenAdeudo: '',
                    noCredito: 1,
                    tipoCredito: '',
                    division: '',
                    ejecutivo: '',
                    abogado: ''
                };
                this.asignacion.acreditadosInfo.push(acreditado);
            }

            console.log(this.asignacion);
        }
    }
});