<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in slides" :key="slide.id">
      <a :href="`/picture/${slide.id}`">
        <section>
          <img :src="slide.url" :alt="slide.title">
        </section>
      </a>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'Carousel',
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
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
    swiperSlide
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
img {
  width: 100%;
  display: block;
  height: auto;
}
.swiper-button-next,
.swiper-button-prev {
  outline: none;
}
</style>
