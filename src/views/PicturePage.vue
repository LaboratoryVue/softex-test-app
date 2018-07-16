<template>
  <div class="col-xs-12 col-md-8 offset-md-2 card wrapper picture">
    <img class="card-img-top picture__image" :src="picture.url" :alt="picture.id">
    <div class="card-body picture__content">
      <p class="card-text picture__title">
        {{ picture.title }}
      </p>
    </div>
    <div class="picture__controls">
      <button @click="goBack()" type="button" class="btn btn-info text-capitalize btn-lg">back to slides</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PicturePage',
  computed: {
    picture() {
      return this.$store.getters.getSelectedPicture(this.$route.params.id);
    }
  },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/global-styles.scss';

.picture {
  padding-top: 1rem;

  &__title {
    font-size: 1.6rem;
    text-transform: capitalize;
  }

  &__controls {
    padding: 1rem 2rem;
  }
}

@media screen and (max-width: $small) {
  .picture__title {
    font-size: 1.2rem;
  }
  .picture__controls {
    text-align: center;
  }
}

@media screen and (max-width: $xsmall) {
  .picture__controls {
    padding: .6rem;
    text-align: center;
  }
}
</style>
