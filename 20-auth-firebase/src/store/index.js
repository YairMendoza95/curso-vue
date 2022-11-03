import { createStore } from 'vuex';
import router from '../router';
const API_KEY = 'AIzaSyAVeasqQStSLupt64psrPTkx5Iw-ivXwEw';

export default createStore({
    state: {
        tareas: [],
        tarea: {
            id: '',
            nombre: '',
            categorias: [],
            estado: '',
            numero: 0
        },
        user: null
    },
    mutations: {
        cargar(state, payload) {
            state.tareas = payload;
        },

        set(state, payload) {
            state.tareas.push(payload);
        },

        delete(state, payload) {
            state.tareas = state.tareas.filter(item => item.id !== payload);
        },

        tarea(state, payload) {
            if (!state.tareas.find(item => item.id === payload)) {
                router.push('/');
                return;
            }

            state.tarea = state.tareas.find(item => item.id === payload);
        },

        update(state, payload) {
            state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item);
            router.push('/');
        },

        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        async cargarLocalStorage({ commit }) {
            await fetch('https://cursovue-46f64-default-rtdb.firebaseio.com/tasks.json')
                .then(res => res.json())
                .then(dataDB => {
                    const data = [];

                    for (let id in dataDB) {
                        data.push(dataDB[id]);
                    }

                    commit('cargar', data);
                })
                .catch(console.error);
        },

        async setTareas({ commit }, tarea) {
            await fetch(`https://cursovue-46f64-default-rtdb.firebaseio.com/tasks/${tarea.id}.json`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(tarea),
                })
                .then(res => res.json())
                .then(resDB => { commit('set', resDB) })
                .catch(console.error);
        },

        async deleteTarea({ commit }, id) {
            await fetch(`https://cursovue-46f64-default-rtdb.firebaseio.com/tasks/${id}.json`, {
                    method: 'DELETE',
                })
                .then(commit('delete', id))
                .catch(console.error);
        },

        setTarea({ commit }, id) {
            commit('tarea', id);
        },

        async updateTarea({ commit }, tarea) {
            await fetch(`https://cursovue-46f64-default-rtdb.firebaseio.com/tasks/${tarea.id}.json`, {
                    method: 'PATCH',
                    body: JSON.stringify(tarea),
                })
                .then(res => res.json())
                .then(dataDB => commit('update', tarea))
                .catch(console.error);
        },

        async registrarUsuario({ commit }, user) {
            await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: user.email,
                        password: user.password,
                        returnSecureToken: true
                    }),
                })
                .then(res => res.json())
                .then(dataDB => {
                    console.log(dataDB);
                    if (dataDB.error)
                        console.error(dataDB.error);
                    commit('setUser', dataDB);
                    router.push('/');
                })
                .catch(console.error);
        }
    },
    modules: {}
});