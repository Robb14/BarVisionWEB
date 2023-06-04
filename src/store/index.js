// import axios from "axios";
// import { createStore } from "vuex";

// const store = createStore({
//   state: {
//     isLoggedIn: false,
//     user: null,
//     locations: [],
//     token: null,
//   },
//   mutations: {
//     setLoggedIn(state, payload) {
//       state.isLoggedIn = payload;
//     },
//     setToken(state, payload) {
//       state.token = payload;
//     },
//     setLocations(state, payload) {
//       state.locations = payload;
//     },
//   },
//   actions: {
//     locations() {},
//     login(context, credentials) {
//       return new Promise((resolve, reject) => {
//         axios
//           .post(
//             `https://barvisionapi-test.azurewebsites.net/Users/auth/login?name=${credentials.Username}&password=${credentials.Password}`
//           )
//           .then((response) => {
//             console.log(response.data);
//             const token = response.data;
//             console.log(token);
//             localStorage.setItem("username", credentials.Username);
//             sessionStorage.setItem("token", JSON.stringify(token));
//             context.commit("setLoggedIn", true);
//             context.commit("setToken", token);
//             resolve(response);
//           })
//           .catch((error) => {
//             reject(error);
//           });
//       });
//     },
//   },
//   getters: {
//     isLoggedIn: (state) => {
//       console.log(state.isLoggedIn);
//       return state.isLoggedIn;
//     },
//     // currentUser: (state) => {
//     //   console.log(state.user);
//     //   return state.user;
//     // },
//     getToken(state) {
//       return state.token;
//     },
//     getLocations(state) {
//       return state.locations;
//     },
//   },
// });

// export default store;
