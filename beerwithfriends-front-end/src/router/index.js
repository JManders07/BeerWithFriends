import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create",
    name: "create",
    component: () => import("../views/CreateView.vue"),
  },
  {
    path: "/beers",
    name: "beers",
    component: () => import("../views/BeersView.vue"),
  },
  {
    path: "/beer/:id",
    name: "beer",
    component: () => import("../views/BeerView.vue"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../views/EditView.vue"),
  },
  {
    path: "/review/:id",
    name: "review",
    component: () => import("../views/ReviewView.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
