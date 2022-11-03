<template>
    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills justify-content-end">
                <router-link tag="li"  to="/" active-class="active" exact><a class="nav-link">Inicio</a></router-link>
                <router-link tag="li" to="/usuarios" active-class="active" exact><a class="nav-link">Usuarios</a></router-link>
            </ul>
        </nav>
        <h3 class="text-muted">Aplicación de usuarios</h3>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
