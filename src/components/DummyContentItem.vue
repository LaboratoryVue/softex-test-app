<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">{{`Fluid jumbotron ${count + 1}`}}</h1>
      <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
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
