import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Detail from "./components/pages/Detail"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/detail/:id",
    component: Detail
  }
]

export const router = new VueRouter({
  mode: "history",
  routes
})