import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Abby from './components/abby/Abby.vue';


Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {
    path: '/abby',
    component: Abby
  },
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
