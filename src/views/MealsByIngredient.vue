<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import axiosClient from "../axios";
import { useRoute } from "vue-router";
import Meals from '../components/Meals.vue'
const route = useRoute();
const ingredient = computed(() => store.state.ingredient)
const meals = computed(() => store.state.searchedMealsByIngredient)
console.log(meals);

onMounted(() => {
  store.dispatch("serachMealByIngredient", route.params.ingredient);
});
</script>
