import Home from './components/Home.vue';
import Users from './components/Users.vue';
import UserDetail from './components/UserDetail.vue';

export const rutas = [
    { path: '', component: Home },
    { path: '/usuarios', component: Users, name: 'usuarios' },
    { path: ':id', component: UserDetail, name: 'infoUsuario' },
    // En el caso de que alguien escriba una ruta errones o antigua se puede hacer un redirect
    { path: '/users', redirect: '/usuarios' },
];