import Vue from 'vue';
import Router from 'vue-router';
import routerChildren from './routerChildren'
import store from '../vuex/store'

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
          component: resolve =>
              require(["../components/common/Home.vue"], resolve),
          children: routerChildren
      },
  ]
});
router.beforeEach((to, from,next)=>{
    if(to.name=='supplierInformation'||to.name=='liveVideo'||to.name=='productionQualityDaily') store.commit('SET_MENU_DATA',true);
    else store.commit('SET_MENU_DATA',false);
    next()
})
export default router