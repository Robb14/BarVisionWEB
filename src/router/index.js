import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Search from "../views/Search.vue";
import Results from "../views/Results.vue";
import Details from "../views/Details.vue";
import Bars from "../views/Bars.vue";
import Matches from "../views/Matches.vue";
import Profile from "../views/Profile.vue";
import AddBar from "../views/AddBar.vue";

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
  {
    path: "/details",
    name: "Details",
    component: Details,
  },
  {
    path: "/bars",
    name: "Bars",
    component: Bars,
  },
  {
    path: "/matches",
    name: "Matches",
    component: Matches,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/addbar",
    name: "AddBar",
    component: AddBar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
