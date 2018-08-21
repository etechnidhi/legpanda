import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import 'mdbvue/build/css/style.css';
import 'font-awesome/css/font-awesome.css';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from "vue-router";
import Login from "./pages/Login.vue";
import SingUp from "./pages/SingUp.vue";
import forgotPassword from "./pages/ForgotPassword.vue";
import Inquiries from "./pages/Inquiries.vue";
import Invoices from "./pages/Invoices.vue";
import Profile from "./pages/Profile.vue";
import AboutMe from "./pages/AboutMe.vue";
import Signalment from "./pages/Signalment.vue";
import Calendar from "./pages/Calendar.vue";
import MyCV from "./pages/MyCV.vue";
import 'vuetify/dist/vuetify.min.css';
import VeeValidate from 'vee-validate';
import store from "./store";
 
Vue.use(Vuetify)
Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

const routes = [
  { path: "/login", component: Login},
  { path: "/signUp", component: SingUp},
  { path: "/forgot", component: forgotPassword},
  { path: "/inquiries", component: Inquiries},
  { path: "/invoices", component: Invoices},
  { path: "/profile", component: Profile},
  { path: "/aboutMe", component: AboutMe},
  { path: "/Signalment", component: Signalment},
  { path: "/calendar", component: Calendar},
  { path: "/mycv", component: MyCV}
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
