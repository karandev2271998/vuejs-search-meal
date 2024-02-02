<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <div
      v-for="ingredient in ingredients"
      :key="ingredient.idIngredient"
      class="bg-white rounded p-3 mb-3 shadow block"
    >
      <RouterLink
        :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
      </RouterLink>
    </div>
    <div v-if="errorMsg">
      <p class="text-2xl font-bold text-red-500">{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axios";
import { useLoading } from "vue-loading-overlay";
const ingredients = ref({});
const errorMsg = ref('');
const $loading = useLoading({
  canCancel: true,
  color: "#000000",
  loader: "spinner",
  width: 180,
  height: 64,
  backgroundColor: "#ffffff",
  opacity: 0.5,
  zIndex: 999,
});
onMounted(async () => {
  let loader = $loading.show({});
  await axiosClient
    .get("/list.php?i=list")
    .then(({ data }) => {
      ingredients.value = data.meals;
      loader.hide();
    })
    .catch((error) => {
      loader.hide();
      if (error) {
        errorMsg.value = error.message;
      }
      console.log("error in ingredient", error);
    });
});
</script>
