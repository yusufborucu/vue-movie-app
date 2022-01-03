<script>
import { mapGetters } from "vuex"

export default {
  created() {
    this.$store.dispatch("movieDetail", { id: this.$route.params.id })
    this.$store.dispatch("cast", { id: this.$route.params.id })
  },
  computed: {
    ...mapGetters(["getMovieDetail", "getCast"])
  }
}
</script>

<template>
  <div class="container">
    <div class="detail">      
      <div class="top-infos">
        <img :src="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${getMovieDetail.poster_path}`" />
        <div class="texts">
          <div class="general">
            <h1>{{ getMovieDetail.title }}</h1>
            <span class="rate">{{ getMovieDetail.vote_average }}</span>
            <span class="date">{{ getMovieDetail.release_date.substr(0, 4) }}</span>
          </div>          
          <ul class="categories">
            <li v-for="genre in getMovieDetail.genres" v-bind:key="genre.id">{{ genre.name }}</li>
          </ul>
          <span>{{ getMovieDetail.overview }}</span>
        </div>        
      </div>      
      <h2>Cast</h2>
      <ul class="cast">
        <li v-for="item in getCast" v-bind:key="item.id">
          <img :src="item.profile_path !== null ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.profile_path}` : `https://via.placeholder.com/100x150`" />
          <span class="name">{{ item.name }}</span>
          <span class="title">{{ item.character }}</span>
        </li>
      </ul>
    </div>    
  </div>
</template>

<style lang="scss" scoped>
.container {  
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 400px) {
    flex-direction: row;
  }

  .detail { 
    width: 60%;

    .top-infos { 
      display: flex;
      margin: 1rem 0 1rem 0;

      @media screen and (max-width: 400px) {
        display: block;
      }   

      .texts { 
        margin-left: 1rem;

        .general { 
          display: flex;
          flex-direction: column;

          .rate { 
            width: fit-content;
            background: #27ae60;
            color: white;
            padding: 3px;
            border-radius: 3px 3px 0 0;
            margin-top: 1rem;
          }

          .date {
            width: fit-content;
            background: #34495e;
            color: white;
            padding: 3px;
            font-size: 13px;
            border-radius: 3px 3px 0 0;
            margin-top: 1rem;
          }

        }

        .categories {
          display: flex;
          margin-top: 1rem;
          margin-bottom: 1rem;

          li {
            margin-right: 1rem;
            background: #34495e;
            color: white;
            padding: 5px;
            border-radius: 5px;
            font-size: 13px;
          }

        }

      }
    }

    .cast { 
      display: flex;
      overflow: auto;

      li {
        display: flex;
        margin: 1rem 1rem 0 0;
        flex-direction: column;

        img {
          width: 100px;
        }

        .name {
          font-size: 14px;
        }

        .title {
          font-size: 11px;
        }

      }

    }

  }

}
</style>