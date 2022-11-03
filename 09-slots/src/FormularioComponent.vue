<template>
    <form action="" class="form">
        <!-- Cualquier información envianda en las etiquetas del componente se recibe con las etiquetas slot y para mostrar diferentes secciones es necesario darles nombre en el caso de que sean varios slots-->
        <slot name="titulo"></slot>
        <slot name="cuerpo"></slot>
        <slot name="botones"></slot>
        
    </form>
</template>

<script>
export default {

}
</script>

<style scoped>
    h3{
        color:green;
    }
</style>
