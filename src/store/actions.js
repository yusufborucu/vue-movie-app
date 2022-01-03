import Vue from "vue"
import { API_URL } from "../config/env"

export const popularMovies = ({ commit }) => {
  Vue.http.get(`${API_URL}/popular`)
    .then(response => {
      commit("setPopularMovies", response.body)
    })
}

export const trendMovies = ({ commit }) => {
  Vue.http.get(`${API_URL}/trend`)
    .then(response => {
      commit("setTrendMovies", response.body)
    })
}