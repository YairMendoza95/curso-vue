<template>
	<div class="my-4 container">
			<button class="btn btn-primary" @click="componenteSelecionado='login'">Iniciar sesión</button>
			<button class="btn btn-primary" @click="componenteSelecionado='cambiar-password'">Cambiar contraseña</button>
		<div class="mt-4 card">
			<!-- // Para evitar que al cambiar de página y regresar se borren los datos de los inputs se necesita hacer uso dela etiqueta keep-alive propia de Vue -->
			<keep-alive>
				<component :is="componenteSelecionado"></component>
			</keep-alive>
		</div>
	</div>
</template>

<script>
import Formulario from './FormularioComponent.vue';
import Login from './Login.vue';
import CambiarPassword from './CambiarPassword.vue';

export default {
	components: { 
		Formulario,
		Login,
		CambiarPassword
	},
	data(){
		return {
			componenteSelecionado:'login'

		}
	}
}
</script>

<style>
</style>
