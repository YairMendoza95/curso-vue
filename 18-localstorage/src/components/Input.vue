<template>
    <div class="container">
		<input type="text" class="form-control my-2" placeholder="Ingrese su nombre" v-model.trim="tarea.nombre">
		<div class="form-check form-check-inline">
            <input type="checkbox" name="" id="check1" class="form-check-input" v-model="tarea.categorias" value="javascript">
			<label for="check1" class="form-check-label">JavaScript</label>
		</div>
		<div class="form-check form-check-inline">
			<input type="checkbox" name="" id="check2" class="form-check-input" v-model="tarea.categorias" value="nodejs">
			<label for="check2" class="form-check-label">Node.js</label>
		</div>
		<div class="mt-2">
			<div class="form-check form-check-inline">
				<input type="radio" name="" id="radio1" class="form-check-input" v-model="tarea.estado" value="urgente">
				<label for="radio1" class="form-check-label">Urgente</label>
			</div>
			<div class="form-check form-check-inline">
				<input type="radio" name="" id="radio2" class="form-check-input" v-model="tarea.estado" value="relax">
				<label for="radio2" class="form-check-label">Relax</label>
			</div>
		</div>
		<div class="mt-2">
			<input type="number" class="form-control my-2" name="" id="" v-model.number="tarea.numero">
		</div>
		<button class="btn btn-dark btn-block mt-2" :disabled="deshabilitar">Procesar</button>
    </div>
</template>

<script>
export default {
    props: {
        tarea: Object
    },
	computed: {
		deshabilitar() {
			return this.tarea.nombre === "";
		}
	}
}
</script>

<style>

</style>
