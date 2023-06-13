import { createStore } from 'vuex';
import axios from 'axios';

const API_BASE_URL = 'https://barvisionapi.azurewebsites.net';

const store = createStore({
    state() {
        return {
            users: [],
            bars: [],
            loggedInUser: null,
            matches: [],
            bar: {},
            suggestedMatches: [],
            results: [],
            reservations: [],
        };
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_RESERVATIONS(state, reservations) {
            state.reservations = reservations;
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
        SET_MATCHES(state, matches) { // Agrega esta mutación
            state.matches = matches;
        },
        SET_BARS(state, bars) {
            state.bars = bars;
        },
        SET_BAR(state, bar) {
            state.bar = bar;
        },
        SET_RESULTS(state, results) {
            state.results = results;
        },
        setSuggestedMatches(state, matches) {
            state.suggestedMatches = matches;
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
        async fetchMatches({ commit }) {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/Match`);
                commit('SET_MATCHES', response.data);
            } catch (error) {
                console.error(error);
            }
        },
        async fetchBars({ commit }) {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/Bar`);
                commit('SET_BARS', response.data);
            } catch (error) {
                console.error(error);
            }
        },
        async fetchBarData({ commit }, barId) {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/Bar/${barId}`);
                console.log(response.data);
                commit('SET_BAR', response.data);
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    console.error('Bad Request:', error.response.data);
                    console.error('Validation Errors:', error.response.data.errors);
                } else {
                    console.error('Error fetching bar:', error);
                }
            }
        },
        async createReservation(_, reservation) {
            try {
                const response = await axios.post(`${API_BASE_URL}/api/Reservation`, reservation);
                // Aquí puedes realizar cualquier acción adicional después de la creación de la reserva, como actualizar los datos del usuario, etc.
                return response.data;
            } catch (error) {
                console.error(error);
                throw new Error('Error creating reservation');
            }
        },
        searchBars({ commit }, searchText) {
            axios
                .get(`${API_BASE_URL}/api/user/search`, { params: { query: searchText } })
                .then((response) => {
                    commit('SET_RESULTS', response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        fetchSuggestedMatches({ commit }) {
            axios.get(`${API_BASE_URL}/api/Match`)
                .then(response => {
                    commit('setSuggestedMatches', response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        async deleteMatch({ commit }, matchId) {
            try {
                await axios.delete(`${API_BASE_URL}/api/Match/${matchId}`);
                commit('REMOVE_MATCH', matchId);
            } catch (error) {
                console.error(error);
                // Manejar cualquier error de eliminación del partido
            }
        },
        async fetchReservations({ commit }) {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/Reservation`);
                commit('SET_RESERVATIONS', response.data);
            } catch (error) {
                console.error(error);
            }
        },

    },
});

export default store;
