<template>
  <div class="card">
    <img class="card-img-top" :src="picture.url" :alt="picture.id">
    <div class="card-body">
      <p class="card-text">
        {{ picture.title }}
      </p>
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
  }
};
</script>
