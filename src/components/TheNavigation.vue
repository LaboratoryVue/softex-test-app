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
@import '../assets/global-styles.scss';

.nav {
  padding: 1rem;
  border-bottom: 1px solid $navLink;
  transition: all 0.1s;

  & > a {
    font-weight: 700;
    color: $navLink;
    text-transform: capitalize;

    &:hover {
      color: $navLinkActive;
    }

    &.router-link-exact-active {
      color: $navLinkActive;
    }
  }
}

.nav-scrolled {
  background-color: aquamarine;
  padding: 0.6rem;
  border-bottom-width: 2px;
  border-bottom-color: lighten($navLink, 0.6);
}

@media screen and (max-width: $small) {
  .nav {
    padding: .6rem 1rem;
    justify-content: space-around;

    & .nav-link {
      padding: .2rem .4rem;
    }
  }
}
</style>
