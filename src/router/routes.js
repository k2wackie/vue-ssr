import HomeView from "../views/HomeView.vue";

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
    path: "/login",
    name: "NoAuthLogin",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/member/Login.vue"),
  },
  {
    path: "/join",
    name: "NoAuthJoin",
    component: () =>
      import(/* webpackChunkName: "join" */ "../views/member/Join.vue"),
  },
  {
    path: "*",
    name: "Error",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/Error.vue"),
  },
];

export default routes;
