<template>
    <table class="table table-striped mb-5 table-bordered">
        <thead class="thead-dark">
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Categorías</th>
                <th>Estado</th>
                <th>Número</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="tarea in tareas" :key="tarea.id">
                <td>{{ tarea.id }}</td>
                <td>{{ tarea.nombre }}</td>
                <td>{{ tarea.categorias.join(', ') }}</td>
                <td>{{ tarea.estado }}</td>
                <td>{{ tarea.numero }}</td>
                <td>
                    <button type="button" class="btn btn-danger btn-sm mr-3" @click="deleteTarea(tarea.id)">Eliminar</button>
                    <router-link :to="`/editar/${tarea.id}`" class="btn btn-warning btn-sm">Editar</router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['deleteTarea'])
    }
}
</script>

