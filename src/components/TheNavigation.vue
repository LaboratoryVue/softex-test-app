<template>
  <nav id="nav" class="nav fixed-top" :class="scrolled">
    <router-link class="nav-link" to="/">home</router-link>
    <router-link class="nav-link" to="/about">about us</router-link>
    <router-link class="nav-link" to="/contact">contact us</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    scrolling: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    scrolled() {
      return this.scrolling ? 'nav-scrolled' : '';
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 1rem;
  border-bottom: 1px solid #2c3e50;
  transition: all 0.1s;

  & > a {
    font-weight: 700;
    color: #2c3e50;
    text-transform: capitalize;

    &:hover {
      color: #42b983;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.nav-scrolled {
  background-color: aquamarine;
  padding: 0.6rem;
  border-bottom-width: 2px;
  border-bottom-color: lighten(#2c3e50, 0.6);
}
</style>
