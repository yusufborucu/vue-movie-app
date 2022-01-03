<script>
import { mapGetters } from "vuex"

import Slider from "../shared/Slider.vue"

export default {
  created() {
    this.$store.dispatch('popularMovies')
    this.$store.dispatch('trendMovies')
  },
  components: {
    Slider
  },
  computed: {
    ...mapGetters(["getPopularMovies", "getTrendMovies"])
  }
}
</script>

<template>
  <div class="container">
    <div class="home">
      <section class="jumbotron">
        <h1>Movie App</h1>
      </section>
      <Slider title="Popular Movies" :movies="getPopularMovies" />
      <Slider title="Trend Movies" :movies="getTrendMovies" />
    </div>    
  </div>  
</template>

<style lang="scss" scoped>
.container {  
  display: flex;
  justify-content: center;

  .home { 
    width: 60%;

    .jumbotron {
      padding: 5rem;
      background: #ecf0f1;
      margin: 1rem 0;
      border-radius: 5px;
    }
  }
}
</style>