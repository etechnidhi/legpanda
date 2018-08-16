import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from 'vuetify'
import VueRouter from "vue-router";
import Login from "./pages/Login.vue";
import SingUp from "./pages/SingUp.vue";
import forgotPassword from "./pages/ForgotPassword.vue";
import Home from "./pages/Home.vue"
import 'vuetify/dist/vuetify.min.css'
import store from "./store";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuetify)
Vue.config.productionTip = false

const routes = [
  { path: "/login", component: Login},
  { path: "/signUp", component: SingUp},
  { path: "/forgot", component: forgotPassword},
  { path: "/home", component: Home}
];
const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router: router,
  template: "<App/>",
  comments: {App},
  render: h => h(App),
  store 
}).$mount('#app')
