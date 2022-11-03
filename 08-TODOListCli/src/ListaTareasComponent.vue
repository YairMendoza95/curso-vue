<template>
    <ul class="list-group">
        <li v-for="(task, index) in tasks" :key="index" class="list-group-item" :class="{finished: task.isFinished}">{{task.title}}
            <span class="pull-right">
                <button type="button" class="btn btn-success btn-sm" @click="task.isFinished = !task.isFinished"><i class="fas fa-check"></i></button>
            </span>
            <span class="pull-right">
                <button type="button" class="btn btn-danger btn-sm" @click="deleteTask(index)"><i class="fas fa-times"></i></button>
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    props:['tasks'],
    methods:{
        deleteTask(index){
            this.tasks.splice(index, 1);
        }
    }
}
</script>

<style>
    .finished {
        color: gray;
        text-decoration: line-through;
    }
</style>
