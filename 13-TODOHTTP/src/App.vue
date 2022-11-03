<template>
	<div class="container">
		<div id="app" class="card">
			<!-- Para enlazar las propiedades de la misma manera que en HTML de igual manera se hace uso de la directiva v-bind -->
			<titulo :titulo="titulo" :numTasks="numTasks"></titulo>
			<div class="card-body">
				<!-- 
					Se puede utilizar un evento personalizado para comunicar un componente padre con un hijo como en el siguiente código

					<nueva-tarea :tasks="tasks" @incrementarContador="noTasks += $event"></nueva-tarea>
					
					la otra forma es por medio de la directiva bind
					<nueva-tarea :tasks="tasks" :actualizarContador="actualizarContador"></nueva-tarea>
				-->
				<nueva-tarea :tasks="tasks" @incrementarContador="noTasks += $event"></nueva-tarea>
				<lista-tareas :tasks="tasks"></lista-tareas>
			</div>
		</div>
	</div>
</template>

<script>
import Titulo from './TituloComponent';
import NuevaTarea from './NuevaTareaComponent';
import ListaTareas from './ListaTareasComponent.vue';
export default {
	components: {
		Titulo,
		NuevaTarea,
		ListaTareas
	},
	data(){
		return {
			titulo: 'Mi lista de tareas.',
			numTasks:3,
			tasks: []
		}
	},
	created(){
		// Una vez declarada la URL en las opciones de Vue ya no es necesario volver a declararla dentro de los métodos
		this.$http.get('tasks.json')
			.then(res => res.json())
			.then(resJson=>{
				for (let id in resJson) {
					let task = {
						id,
						title: resJson[id].title,
						isFinished: resJson[id].isFinished
					};

					this.tasks.push(task);
				}
			});
	}
}
</script>

<style>

</style>
