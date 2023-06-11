import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: [],
        loggedInUser: null,
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
            }
        },
    },
});

export default store;
