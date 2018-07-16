<template>
  <section class="py-4">
    <dummy-content-item v-for="(n, i) in count" :key="i" :count="i" />
  </section>
</template>

<script>
import DummyContentItem from '../components/DummyContentItem';
export default {
  name: 'DummyContent',
  data() {
    return {
      count: 4
    };
  },
  components: {
    DummyContentItem
  }
};
</script>

<style lang="scss" scoped>
//
</style>
