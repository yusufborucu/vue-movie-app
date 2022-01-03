<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  props: ['title', 'movies'],
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {      
      swiperOptions: {
        slidesPerView: 3,
        mousewheel: true,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        loop: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  }
}
</script>

<template>
  <section>
    <h2>{{ title }}</h2>
    <swiper 
      class="swiper"
      :options="swiperOptions">
      <swiper-slide
        v-bind:key="item.id"
        v-for="item in movies">
        <router-link :to="{ path: 'detail/' + item.id }" tag="a">
          <div class="movie-item">
            <div class="top-info">
              <span class="rate">{{ item.vote_average }}</span>
              <span class="date">{{ item.release_date.substr(0, 4) }}</span>
            </div>              
            <img :src="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`" class="poster" />
            <span class="title">{{ item.title }}</span>              
          </div>          
        </router-link>
      </swiper-slide>
    </swiper>  
  </section>
</template>

<style lang="scss" scoped>
section {

  h2 {
    margin-top: 1rem;
  }

  .swiper {
    margin-top: 1rem;
  }

  .movie-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    .top-info {
      display: flex;
      width: 100%;
      justify-content: space-between;

      .rate {
        background: #27ae60;
        color: white;
        padding: 3px;
        border-radius: 3px 3px 0 0;
      }

      .date {
        background: #34495e;
        color: white;
        padding: 3px;
        font-size: 13px;
        border-radius: 3px 3px 0 0;
      }
    }
    
    .poster {
      width: 100%;
    }
    
    .title {
      color: black;
      font-weight: bold;
    }

  }

}
</style>