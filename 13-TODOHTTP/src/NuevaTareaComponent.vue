<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Escriba una nueva tarea" aria-describedby="button-addon2" v-model="newTask" @keyup.enter="insertTask">
        <button class="btn btn-outline-primary" type="button" id="button-addon2" @click="insertTask">Agregar</button>
    </div>
</template>

<script>
import { bus } from './main';
export default {
    data(){
        return {
            newTask:''
        }
    },
    props:['tasks'],
    methods:{
        insertTask(){
            let task = this.newTask.trim();
            if(task){
                this.tasks.push({
                    title: task,
                    isFinished: false
                });
                bus.actualizarContador(this.tasks.length);
            }

            this.newTask = '';

            // El objeto $http es propio de vue-resource
            this.$http.post('tasks.json', {
                title: task,
                isFinished: false
            }).then(console.log);
        }
    },
    created(){
        bus.actualizarContador(this.tasks.length);
    }
}
</script>

<style>

</style>
