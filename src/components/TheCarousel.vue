<template>
  <swiper :options="swiperOption">
    <caroussel-item v-for="slide in slides" :key="slide.id" :slide="slide" />
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { swiper } from 'vue-awesome-swiper';
import CarousselItem from '../components/CarousselItem';
export default {
  name: 'Carousel',
  data() {
    return {
      swiperOption: {
        grabCursor: true,
        autoHeight: true,
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  },
  components: {
    swiper,
    CarousselItem
  },
  computed: {
    slides() {
      return this.$store.getters.getAllPiclas;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/global-styles.scss';
@import '../../node_modules/swiper/dist/css/swiper.css';

@media screen and (max-width: $small) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}

</style>
