import { createStore } from 'vuex';
import axios from 'axios';

const API_BASE_URL = 'https://barvisionapi.azurewebsites.net';

const store = createStore({
    state() {
        return {
            users: [],
            bars: [],
            loggedInUser: null,
        };
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_LOGGED_IN_USER(state, user) {
            state.loggedInUser = {
                ...user,
                id: user.id // Asegúrate de que la propiedad 'id' esté presente en el objeto 'loggedInUser'
            };
            state.isLoggedIn = true;
        },
        SET_REGISTERED_USER(state, user) {
            state.loggedInUser = user;
            state.isLoggedIn = true;
        },
        LOGOUT(state) {
            state.loggedInUser = null;
            state.isLoggedIn = false;
        },
        ADD_BAR(state, bar) {
            // Agregar el ID del propietario al bar creado
            bar.ownerId = state.loggedInUser.id;
            state.bars.push(bar);
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
                throw new Error('Invalid username or password');
            }
        },

        async register({ commit }, userData) {
            try {
                const response = await axios.post(`${API_BASE_URL}/api/user/register`, userData);
                commit('SET_REGISTERED_USER', response.data);
            } catch (error) {
                console.error(error);
                throw new Error('Username already in use');
            }
        },
        async deleteUser({ commit }, userId) {
            try {
                await axios.delete(`${API_BASE_URL}/api/user/${userId}`);
                commit('LOGOUT');
            } catch (error) {
                console.error(error);
                throw new Error('Error deleting user');
            }
        },
        async createBar({ commit, state }, barData) {
            try {
                // Agregar el ID del propietario al barData antes de enviar la solicitud
                barData.ownerId = state.loggedInUser.id;

                const response = await axios.post(`${API_BASE_URL}/api/Bar`, barData);
                // Handle successful bar creation if needed
                console.log('Bar created:', response.data);
                commit('ADD_BAR', response.data);
            } catch (error) {
                console.error(error);
                throw new Error('Error creating bar');
            }
        },
    },
});

export default store;
