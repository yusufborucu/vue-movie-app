import Vue from "vue"
import { API_URL } from "../config/env"

export const popularMovies = ({ commit }) => {
  Vue.http.get(`${API_URL}/movie/popular`)
    .then(response => {
      commit("setPopularMovies", response.body.results)
    })
}

export const trendMovies = ({ commit }) => {
  Vue.http.get(`${API_URL}/movie/top_rated`)
    .then(response => {
      commit("setTrendMovies", response.body.results)
    })
}

export const movieDetail = ({ commit }, data) => {
  Vue.http.get(`${API_URL}/movie/${data.id}`)
    .then(response => {
      commit("setMovieDetail", response.body)
    })
}

export const cast = ({ commit }, data) => {
  Vue.http.get(`${API_URL}/movie/${data.id}/credits`)
    .then(response => {
      commit("setCast", response.body.cast)
    })
}