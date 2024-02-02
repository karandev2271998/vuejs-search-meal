<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
  </div>
  
   <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals" />
 
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import store from "../store";
import axiosClient from "../axios";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = computed(() => store.state.letters);
const meals = computed(() => store.state.searchedMealsByLetter);
const ingredients = ref([]);
const searchItemByLetter = ref("");

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data;
  storeMealItem();
});

function storeMealItem() {
  searchItemByLetter.value = route.params.letter;
  if (searchItemByLetter.value) {
    store.dispatch("serachMealByLetter", searchItemByLetter.value);
  }
}

watch(route, async (newVal, oldValue) => {
  console.log(newVal, oldValue);
  storeMealItem();
});
</script>
