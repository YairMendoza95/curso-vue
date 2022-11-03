<template>
	<div class="container">
		<div id="app" class="card">
			<!-- Para enlazar las propiedades de la misma manera que en HTML de igual manera se hace uso de la directiva v-bind -->
			<titulo :titulo="titulo" :noTasks="noTasks"></titulo>
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
			noTasks:3,
			tasks: [
				{
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
				}
			]
		}
	}
}
</script>

<style>

</style>
