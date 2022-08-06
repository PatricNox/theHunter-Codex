import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "@/views/Index.vue";
import Map from "@/views/Map.vue";

Vue.use(VueRouter);

export enum ViewName {
  App = "App",
  Map = "Map",
}

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: ViewName.App,
    component: Index,
    meta: { requiresAuth: true },
  },
  {
    path: "/map/:id",
    name: ViewName.Map,
    component: Map,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
