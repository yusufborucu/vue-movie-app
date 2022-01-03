import Vue from "vue"
import Vuex from "vuex"
import * as actions from "./actions"
import * as getters from "./getters"
import * as mutations from "./mutations"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    popularMovies: [],
    trendMovies: [],
    movieDetail: {},
    cast: {}
  },
  actions,
  getters,
  mutations
})