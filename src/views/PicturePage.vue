<template>
  <div class="card wrapper picture">
    <img class="card-img-top picture__image" :src="picture.url" :alt="picture.id">
    <div class="card-body picture__content">
      <p class="card-text picture__title">
        {{ picture.title }}
      </p>
    </div>
    <div class="picture__controls">
      <button @click="goBack()" type="button" class="btn btn-info text-capitalize btn-large">back to slides</button>
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
.picture {
  //

  &__title {
    font-size: 2rem;
    text-transform: capitalize;
  }

  &__controls {
    padding: 1rem 2rem;
  }
}
</style>
