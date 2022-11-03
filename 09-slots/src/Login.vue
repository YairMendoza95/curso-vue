<template>
    <div class="container">
		<div class="mt-4 card">
            <formulario>
                <div slot="titulo" class="card-header">
                    <h3>Iniciar sesión</h3>
                </div>
                <div slot="cuerpo" class="card-body">
                    <div class="form-group">
                        <label for="correo">Correo electronico</label>
                        <input type="email" id="correo" class="form-control" placeholder="Escribe tu correo electrónico"> 
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" class="form-control" placeholder="Escribe tu contraseña"> 
                    </div>
                </div>
                <div slot="botones" class="card-footer">
                    <button class="btn btn-primary">Iniciar sesión</button>
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
    destroyed(){
        
    }
}
</script>

<style>

</style>
