<template>
    <div class="container">
		<div class="mt-4 card">
            <formulario>
                <div slot="titulo" class="card-header">
                    <h3>Cambiar Contraseña</h3>
                </div>
                <div slot="cuerpo" class="card-body">
                    <div class="form-group">
                        <label for="correo">Correo electronico</label>
                        <input type="email" id="correo" class="form-control" placeholder="Escribe tu correo electrónico"> 
                    </div>
                </div>
                <div slot="botones" class="card-footer">
                    <button class="btn btn-primary">Cambiar Contraseña</button>
                </div>
            </formulario>
		</div>
	</div>
</template>

<script>
import Formulario from './FormularioComponent.vue';

export default {
    components: {
        Formulario
    },
    data(){
        return {};
    },
}
</script>

<style>

</style>
