import Vue from 'vue'
import App from './App.vue'

import { router } from "./router"
import { store } from "./store"
import VueResource from "vue-resource"

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import { API_TOKEN } from "./config/env"

Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

Vue.http.interceptors.push((request) => {
  request.headers.set('Authorization', 'Bearer ' + API_TOKEN)
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
