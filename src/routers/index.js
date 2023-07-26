import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";
import Cars from "../components/dashboardCom/Cars.vue";
import { createRouter, createWebHistory } from "vue-router";

// Vue.use(VueRouter);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "login", component: Login },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/cars",
      name: "cars",
      component: Cars,
    },
  ],
});

// const router = new createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   route,
// });

export default router;
