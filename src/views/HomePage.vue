<template>
  <section class="wrapper">
    <carousel />
    <dummy-content />
  </section>
</template>

<script>
import Carousel from '../components/TheCarousel';
import DummyContent from '../components/DummyContent';
export default {
  name: 'HomePage',
  components: {
    Carousel,
    DummyContent
  }
};
</script>

<style lang="scss" scoped>
//
</style>
