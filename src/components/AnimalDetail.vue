<template>
  <div class="container mt-5">
    <h1>{{ animal.name }}</h1>
    <img
      :src="animal.imageUrl"
      alt="Image of {{ animal.name }}"
      class="img-fluid mb-4"
    />
    <p>{{ animal.description }}</p>
    <router-link to="/animals" class="btn btn-primary"
      >Back to Animals List</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["name"], // Accepts the 'name' prop from the route
  data() {
    return {
      animal: null,
    };
  },
  mounted() {
    this.fetchAnimalDetails();
  },
  methods: {
    async fetchAnimalDetails() {
      const name = this.name; // The name comes from the URL
      const habitat = await this.fetchAnimalHabitat(name);
      const imageUrl = await this.fetchAnimalImage(name);

      this.animal = {
        name,
        habitat,
        imageUrl,
      };
    },
    async fetchAnimalHabitat(name) {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/animals?name=${name}`,
        {
          headers: { "X-Api-Key": "XUrkiZ8CqgXO0McvqPMpmXWnE6RixqZYWidyofow" },
        }
      );
      const data = await response.json();
      return data[0]?.characteristics?.habitat || "Habitat not available";
    },
    async fetchAnimalImage(name) {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${name}&client_id=Sc4pjbkYKYIW0Kb84jJCNXyakIkkaiQ1c2DaGqTRzAA`
      );
      const data = await response.json();
      return data.results[0]?.urls?.small || "https://via.placeholder.com/150";
    },
  },
};
</script>

<style>
.container {
  padding: 20px;
}
</style>
