<template>
    <div class="card-header">
        <h2 class="card-header">{{titulo}}</h2>
        Número de tareas: {{noTasks}}
    </div>
</template>

<script>
import { bus } from './main';
export default {
    // Para enviar información desde un componente padre a un componente hijo se hace uso de props al igual que en React
    // Los props pueden ser objetos en lugar de un array esto es el caso de que se quieran agregar validaciones
    /*
        props:{
            titulo:{
                default:,
                require:
            }
        }
     */
    props:['titulo','noTasks'],
    data(){
        return { 
            noTasks: 0
        }
    },
    created(){
        bus.$on('actualizarContador', noTasks => {
            this.noTasks = noTasks;
        });
    }
}
</script>
