<script>
import { mapGetters } from "vuex"

import Slider from "../shared/Slider.vue"

export default {
  data() {
    return {
      movies: [
        {
          id: 1,
          title: "Spider-Man: No Way Home",
          date: "15/12/2021",
          rate: "8.4",
          image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        },
        {
          id: 2,
          title: "Spider-Man: No Way Home",
          date: "15/12/2021",
          rate: "8.4",
          image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        },
        {
          id: 3,
          title: "Spider-Man: No Way Home",
          date: "15/12/2021",
          rate: "8.4",
          image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        },
        {
          id: 4,
          title: "Spider-Man: No Way Home",
          date: "15/12/2021",
          rate: "8.4",
          image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        },
        {
          id: 5,
          title: "Spider-Man: No Way Home",
          date: "15/12/2021",
          rate: "8.4",
          image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        },
        {
          id: 6,
          title: "Spider-Man: No Way Home",
          date: "15/12/2021",
          rate: "8.4",
          image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        },
        {
          id: 7,
          title: "Spider-Man: No Way Home",
          date: "15/12/2021",
          rate: "8.4",
          image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        },
        {
          id: 8,
          title: "Spider-Man: No Way Home",
          date: "15/12/2021",
          rate: "8.4",
          image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        },
        {
          id: 9,
          title: "Spider-Man: No Way Home",
          date: "15/12/2021",
          rate: "8.4",
          image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        },
        {
          id: 10,
          title: "Spider-Man: No Way Home",
          date: "15/12/2021",
          rate: "8.4",
          image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        }
      ]
    }
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
      <Slider title="Popular Movies" :movies="this.movies" />
      <Slider title="Trend Movies" :movies="this.movies" />
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