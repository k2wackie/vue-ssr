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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "*",
    name: "Error",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/Error.vue"),
  },
];

export function createRouter() {
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });

  router.beforeEach((to, from, next) => {
    // console.log("router.js beforeEach");
    next();
  });

  router.afterEach((to, from) => {
    // console.log("router.js afterEach");
  });

  return router;
}
