<template>
    <div>
        Editar: {{ $route.params.id }}  {{ tarea }}
        <form @submit.prevent="updateTarea(tarea)">
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
