<template>
    <div>
        <h2>Editar: {{ $route.params.id }} </h2>
        <form @submit="updateTarea(tarea)">
            <Input :tarea="tarea" />
        </form>
    </div>
</template>

<script>
import Input from '../components/Input.vue';
import { mapState, mapActions } from 'vuex';

export default {
    components: {
        Input
    },
    computed: {
        ...mapState(['tarea'])
    },
    methods: {
        ...mapActions(['setTarea', 'updateTarea'])
    },
    created() {
        this.setTarea(this.$route.params.id);
    }
}
</script>
