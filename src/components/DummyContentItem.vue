<template>
  <div class="jumbotron jumbotron-fluid dummy">
    <div class="container dummy__body">
      <h1 class="dummy__title">{{`Fluid jumbotron ${count + 1}`}}</h1>
      <p class="lead dummy__content">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DummyContentItems',
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/global-styles.scss';

  .dummy {
    //

    &__title {
      font-size: 2rem;
      text-transform: capitalize;
    }
  }

  @media screen and (max-width: $small) {
    .dummy__title {
      font-size: 1.6rem;
    }
    .dummy__content {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: $xsmall) {
    .dummy__body {
      text-align: center;
    }
  }
</style>
