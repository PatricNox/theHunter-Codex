import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export enum ViewName {
  App = "App",
  Dashboard = "Dashboard",
}

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: ViewName.App,
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    name: ViewName.Dashboard,
    component: Home,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
