<template>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-5 p-8">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
      <MealList :meal="meal" :btnName="'YouTube'" />
    </div>

    <div v-if="!meals" class="flex justify-center text-2xl">
      <p>Oops! Meal item not found</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import axiosClient from "../axios";
import { useRoute } from "vue-router";
import MealList from "../components/MealList.vue";

const meals = computed(() => store.state.searchedMealsByIngredient);
const route = useRoute();

onMounted(() => {
  store.dispatch("serachMealByIngredient", route.params.ingredient);
});
</script>
