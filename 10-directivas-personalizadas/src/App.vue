<template>
	<div class="container">
		<div class="mt-3 row justify-content-center">
			<div class="col-6">
				<div class="card">
					<div class="card-header">
						<h3 v-decorar.negrita="'Times New Roman'">Aprende Vue.js fácilmente</h3>
					</div>
					<div class="card-body"></div>
					<div class="card-footer"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// De esta manera se declaran las directivas locales
	directives: {
		decorar(){

		},
	}
}
</script>

<style>

</style>
