import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Search from "../views/Search.vue";
import Results from "../views/Results.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/results",
    name: "Results",
    component: Results,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
