<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col">
        <navigation :scrolling="scrolled" />
      </div>
    </div>
        <div class="row">
      <div class="col">
        <transition name="main" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './components/TheNavigation';
export default {
  name: 'app',
  data() {
    return {
      scrolled: false,
      offset: 5
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > this.offset;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
