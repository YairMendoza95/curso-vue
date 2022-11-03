<template>
    <div class="row justify-content-center">
        <div class="col-6">
            <div class="container">
                <h1 class="text-center">Regirtro de usuarios</h1>
                <form class="mt-4" @submit.prevent="procesarUsuario">
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Correo electrónico" v-model.trim="user.email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control my-2" placeholder="Contraseña" v-model="user.password">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control my-2" placeholder="Confirmar contraseña" v-model="passwordConf">
                    </div>
                    <div class="form-group row justify-content-center">
                        <button type="submit" class="btn btn-success col-4" :disabled="disabled">Registrar</button> 
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            passwordConf: '' 
        }
    },
    computed: {
        disabled() {
            if(!this.user.email.includes('@'))
                return true;
            if(this.user.password.length > 5 && this.user.password === this.passwordConf)
                return false;

            return true;
        }
    },
    methods: {
        ...mapActions(['registrarUsuario']),
        procesarUsuario() {
            this.registrarUsuario(this.user);

            this.user={
                email: '',
                password: ''
            };
        }
    }
}
</script>

<style>

</style>
