import { createRouter, createWebHistory } from "vue-router";
import { Home, Sign, Login, ForSearch} from "../views/index.js";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign",
    name: "Sign",
    component: Sign,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/search",
    name: "Search",
    component: ForSearch,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
