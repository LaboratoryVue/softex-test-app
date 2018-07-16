<template>
  <swiper-slide class="slide">
    <a class="slide__link" :href="`/picture/${slide.id}`">
      <section class="slide__wrapper">
        <img class="slide__image" :src="slide.url" :alt="slide.title">
      </section>
    </a>
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'CarousselItem',
  props: {
    slide: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    swiperSlide
  }
};
</script>

<style lang="scss" scoped>
@import '../../node_modules/swiper/dist/css/swiper.css';
.slide {
  //
  &__image {
    width: 100%;
    display: block;
    height: auto;
  }
}

.swiper-button-next,
.swiper-button-prev {
  outline: none;
}
</style>
