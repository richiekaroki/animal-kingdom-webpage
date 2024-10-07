<template>
  <div>
    <h1>Animal List</h1>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else>
      <div v-for="animal in paginatedAnimals" :key="animal.name" class="animal">
        <h2>{{ animal.name }}</h2>
        <img :src="animal.imageUrl" :alt="animal.name" class="animal-img" />
        <p>{{ animal.description }}</p>
      </div>

      <!-- Pagination controls -->
      <div class="pagination-controls">
        <button @click="prevPage" :disabled="currentPage === 1">
          Previous
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animals: [], // Store the fetched animals for large dataset
      animalNames: [
        "tiger",
        "cheetah",
        "lion",
        "elephant",
        "giraffe",
        "zebra",
        "leopard",
      ],
      currentPage: 1, // Track the current page
      pageSize: 3, // Number of animals per page
      loading: true, // Loading state
    };
  },
  mounted() {
    this.fetchAnimals(); // Fetch all animals on mount
  },
  computed: {
    totalPages() {
      return Math.ceil(this.animals.length / this.pageSize); // Calculate total pages
    },
    paginatedAnimals() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.animals.slice(start, end); // Slice the animals for the current page
    },
  },
  methods: {
    // Fetch all animals (for pagination purposes)
    async fetchAnimals() {
      this.loading = true;
      let fetchedAnimals = [];

      for (const name of this.animalNames) {
        try {
          const description = await this.fetchAnimalDescription(name);
          const imageUrl = await this.fetchAnimalImage(name);
          fetchedAnimals.push({
            name: this.capitalizeName(name),
            description,
            imageUrl,
          });
        } catch (error) {
          console.error(`Error fetching data for ${name}:`, error);
        }
      }

      this.animals = fetchedAnimals; // Set the animals list
      this.loading = false; // Stop loading
    },

    // Go to the previous page
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    // Go to the next page
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    // Fetch animal description from API Ninjas
    async fetchAnimalDescription(name) {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/animals?name=${name}`,
          {
            headers: {
              "X-Api-Key": "XUrkiZ8CqgXO0McvqPMpmXWnE6RixqZYWidyofow",
            },
          }
        );
        const data = await response.json();
        return (
          data[0]?.characteristics?.description || "Description not available"
        );
      } catch (error) {
        console.error(`Failed to fetch description for ${name}:`, error);
        return "Description not available";
      }
    },

    // Fetch animal image from Unsplash API
    async fetchAnimalImage(name) {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${name}&client_id=Sc4pjbkYKYIW0Kb84jJCNXyakIkkaiQ1c2DaGqTRzAA`
        );
        const data = await response.json();
        return (
          data.results[0]?.urls?.small || "https://via.placeholder.com/150"
        );
      } catch (error) {
        console.error(`Failed to fetch image for ${name}:`, error);
        return "https://via.placeholder.com/150";
      }
    },

    // Capitalize the animal name (e.g., 'tiger' -> 'Tiger')
    capitalizeName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
};
</script>

<style scoped>
.animal {
  margin-bottom: 20px;
}
.animal-img {
  width: 200px;
  height: auto;
  display: block;
  margin-bottom: 10px;
}
.pagination-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
</style>
