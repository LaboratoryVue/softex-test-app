<template>
  <nav id="nav" class="nav fixed-top">
    <router-link class="nav-link" to="/">home</router-link>
    <router-link class="nav-link" to="/about">about us</router-link>
    <router-link class="nav-link" to="/contact">contact us</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 1rem;
  border-bottom: 1px solid #2c3e50;

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
</style>
