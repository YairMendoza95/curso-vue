<template>
    <div class="container">
        <h3 class="text-center">Información del usuario</h3>
        <div>
            <p><strong>Nombre: </strong>{{nombre}}</p>
            <p><strong>Correo electrónico: </strong>{{email}}</p>
        </div>
        <button type="button" class="btn btn-primary" @click="volver">Volver</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nombre: '',
            email: '',
        }
    },
    methods:{
        volver(){
            // Se puede utilizar la ruta tal cual o en su defecto un objeto indicando el nombre de la ruta, esta forma es más eficiente ya que si hay cambios en la ruta se evitara cambiarlo en todos los lugares donde se implemento
            this.$router.push({ name: 'usuarios' });
        }
    },
    created(){
        let id = this.$route.params.id;
        this.$http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(user => {
                this.nombre = user.name;
                this.email = user.email;
            });
    },
    // El watch habilita el ver cambios en este en la ruta para poder cambiar de información, esto solo en el caso de ser una ruta hija
    /*
    watch: {
        $route(){
            let id = this.$route.params.id;
            this.$http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(user => {
                this.nombre = user.name;
                this.email = user.email;
            });
        }
    }*/
}
</script>

<style>

</style>
