import { createStore } from 'vuex';
import axios from 'axios';

const API_BASE_URL = 'https://barvisionapi.azurewebsites.net';

const store = createStore({
    state() {
        return {
            users: [],
            loggedInUser: null,
        };
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_LOGGED_IN_USER(state, user) {
            state.loggedInUser = user;
        },
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/user`);
                commit('SET_USERS', response.data);
            } catch (error) {
                console.error(error);
            }
        },
        async login({ commit }, credentials) {
            try {
                const response = await axios.post(`${API_BASE_URL}/api/user/login`, credentials);
                commit('SET_LOGGED_IN_USER', response.data);
            } catch (error) {
                console.error(error);
                throw new Error('Invalid username or password'); // Lanzar un error para que pueda ser capturado en el componente
            }
        }
    },
});

export default store;
