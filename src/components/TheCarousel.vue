<template>
  <swiper :options="swiperOption">
    <caroussel-item v-for="slide in slides" :key="slide.id" :slide="slide" />
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
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
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
@import '../../node_modules/swiper/dist/css/swiper.css';
</style>
