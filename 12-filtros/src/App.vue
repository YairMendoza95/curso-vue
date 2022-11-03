<template>
	<div class="container">
		<div class="mt-3 row justify-content-center">
			<div class="col-6">
				<!-- Los filtros se utilizan haciendo la interpolacion seguido de una barra y el nombre del filtro.
					Los filtros se pueden concatenar de la misma manera, estos reciben como parametro todo lo que se encuentre a la izquierda-->
				<h3>{{msg | suspensivos | mayusculas}}</h3>
				<span>{{msg}}</span>
				<br>
				<span>{{temperatura | aFarenheit}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			temperatura:30
		}
	},
	// Los filtros locales se declaran dentro del mismo componente dentro de la propiedad filters
	filters:{
		mayusculas(msg){
			return msg.toUpperCase();
		},
		aFarenheit(temperatura){
			return ((9/5)*temperatura +32)+' °F';
		}
	}
}
</script>

<style>

</style>
