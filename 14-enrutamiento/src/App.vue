<template>
	<div class="container">
		<encabezado></encabezado>
		<div class="row justify-content-center">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Encabezado from './components/Encabezado.vue';

export default {
	components:{
		Encabezado,
	}

}
</script>

<style>
</style>
