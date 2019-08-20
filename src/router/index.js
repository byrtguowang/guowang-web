import Vue from 'vue';
import Router from 'vue-router';
import routerChildren from './routerChildren'

Vue.use(Router);

const router = new Router({
// export default new Router({
    routes: [
      {
          path: "/",
          redirect: "/login"
      },
      {
          path: "/login",
          component: resolve =>
              require(["../components/common/login.vue"], resolve),
      },
      {
          path: "/Home",
          redirect: "/Home/Homepage",
          component: resolve =>
              require(["../components/common/Home.vue"], resolve),
          children: routerChildren
      },
  ]
});
export default router