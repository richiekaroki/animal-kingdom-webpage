<template>
  <div>
    <div v-if="loading" class="text-center">Loading animals...</div>
    <div v-else class="row">
      <div v-for="animal in animals" :key="animal.name" class="col-md-4">
        <div class="card mb-4">
          <img :src="animal.imageUrl" class="card-img-top" :alt="animal.name" />
          <div class="card-body">
            <h5 class="card-title">{{ animal.name }}</h5>
            <p class="card-text">{{ animal.description }}</p>
            <!-- Link to individual animal page -->
            <router-link :to="`/animals/${animal.name}`" class="btn btn-primary"
              >Learn More</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animals: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchAnimals();
  },
  methods: {
    async fetchAnimals() {
      const animalNames = ["Lion", "Tiger", "Elephant"]; // Example animals
      let fetchedAnimals = [];

      for (const name of animalNames) {
        const description = await this.fetchAnimalDescription(name);
        const imageUrl = await this.fetchAnimalImage(name);

        fetchedAnimals.push({
          name,
          description,
          imageUrl,
        });
      }

      this.animals = fetchedAnimals;
      this.loading = false;
    },
    async fetchAnimalDescription(name) {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/animals?name=${name}`,
        {
          headers: { "X-Api-Key": "VxVW3niCm1WjncTJFe23JQ==OcBrzgjxSEBeby04" },
        }
      );
      const data = await response.json();
      return (
        data[0]?.characteristics?.description || "Description not available"
      );
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

<style></style>
