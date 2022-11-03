let data = {
    tasks: [{
            title: 'Aprender Vue.js',
            isFinished: false,
        },
        {
            title: 'Aprender Oracle',
            isFinished: false,
        },
        {
            title: 'Aprender React-native',
            isFinished: false,
        },
    ],
    newTask: '',
};
// Cuando se definen componentes y estos utilizan información definida dentro de data, esta se define como una función que retorna una objeto

// Título
Vue.component('name', {
    template: '<h2 class="card-header">{{title}}</h2>',
    data: function() {
        return { title: 'TODO List with Components', }
    }
})

// Nueva Tarea
Vue.component('nuevatarea', {
    template: `<div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Escriba una nueva tarea" aria-describedby="button-addon2" v-model="newTask" @keyup.enter="insertTask">
                <button class="btn btn-outline-primary" type="button" id="button-addon2" @click="insertTask">Agregar</button>
            </div>`,
    data: function() {
        return data;
    },
    methods: {
        insertTask: function() {
            let task = this.newTask.trim();
            this.tasks.push({
                title: task,
                isFinished: false
            });

            this.newTask = '';
        },
    }
});

// Lista de tareas
Vue.component('tasks', {
    template: `<ul class="list-group">
                <li class="list-group-item" v-for="(task, index) in tasks" v-bind:class="{finished: task.isFinished}">
                    {{++index}}. {{task.title}}
                    <span class="pull-right">
                        <button type="button" class="btn btn-success btn-sm" @click="task.isFinished = !task.isFinished"><i class="fas fa-check"></i></button>
                    </span>
                    <span class="pull-right">
                        <button type="button" class="btn btn-danger btn-sm" @click="deleteTask(index)"><i class="fas fa-times"></i></button>
                    </span>
                </li>
            </ul>`,
    data: function() {
        return data;
    },
    methods: {
        deleteTask: function(index) {
            this.tasks.splice(index, 1);
        }
    },
});

new Vue({
    el: '#app',
    data,

});