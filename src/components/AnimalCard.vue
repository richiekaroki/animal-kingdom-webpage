<template>
  <div class="col-md-4">
    <div class="card mb-4">
      <img :src="animal.imageUrl" class="card-img-top" :alt="animal.name" />
      <div class="card-body">
        <h5 class="card-title">{{ animal.name }}</h5>
        <p class="card-text">{{ animal.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    animal: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.card {
  min-height: 400px;
}
</style>
