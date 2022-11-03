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

                // Para enviar información del hijo al padre se hace con el método $emit
                //bus.$emit('actualizarContador', this.tasks.length);
                bus.actualizarContador(this.tasks.length);

               // Cuando el paso de información se hace por medio de bind se llama una funcion
               // this.actualizarContador();
            }

            this.newTask = '';
        }
    },
    created(){
        bus.actualizarContador(this.tasks.length);
    }
}
</script>

<style>

</style>
