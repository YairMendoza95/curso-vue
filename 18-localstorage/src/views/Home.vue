<template>
	<div>
		<h2>Formulario en Vue.js</h2>
		<hr>
		<form @submit.prevent="procesarTarea">
			<Input :tarea="tarea"/>
		</form>
		<hr>
		<ListaTareas/>
	</div>
</template>

<script>
import Input from '../components/Input.vue';
import ListaTareas from '../components/ListaTareas.vue';
import { mapActions } from 'vuex';
const shortId = require('shortid');

export default {
	name: 'Home',
	components: {
		Input,
		ListaTareas
	},
	data() {
		return {
			tarea: {
				id: '',
				nombre: '',
				categorias: [],
				estado: '',
				numero: 0
			}
		};
	},
	methods: {
		...mapActions(['setTareas']),
		procesarTarea() {
			console.log(this.tarea);

			if(this.tarea.nombre === "") {
				console.log('Campo vacío');
				return;
			}
			// Generar Id
			this.tarea.id = shortId.generate();
			console.log(this.tarea.id);
			this.setTareas(this.tarea);

			this.tarea = {
				id: '',
				nombre: '',
				categorias: [],
				estado: '',
				numero: 0
			};
		},

	}
}
</script>
