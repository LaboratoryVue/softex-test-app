<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col">
        <navigation />
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
