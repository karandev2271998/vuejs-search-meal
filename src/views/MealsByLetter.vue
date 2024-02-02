<template>
  <!--  Search meals by letter name start  -->
  <div class="flex justify-center gap-1 mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <!--  Search meals by letter name end  -->
  <div>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-5 p-8" v-if="meals">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
      <MealList :meal="meal" :btnName="'YouTube'" />
    </div>
  </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import store from "../store";
import axiosClient from "../axios";
import { useRoute } from "vue-router";
import MealsByName from "./MealsByName.vue";
import MealList from "../components/MealList.vue";

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
  storeMealItem();
});
</script>
