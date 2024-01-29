<template>
  <div class="max-w-[800px] mx-auto p-8" v-if="mealInfo">
    <h1 class="text-5xl font-bold mb-5 mt-5">{{ mealInfo.strMeal }}</h1>
    <img :src="mealInfo.strMealThumb" :alt="mealInfo.strMeal" class="max-w[100%]"/>
    <div class="grid gird-cols-1 sm:grid-cols-3 mb-2 text-lg py-2" v-if="getData">
      <div><strong class="font-bold">Category</strong>: {{ mealInfo.strCategory }}</div>
      <div><strong class="font-bold">Area</strong>: {{ mealInfo.strArea }}</div>
      <div><strong class="font-bold">Tags</strong>: {{ mealInfo.strTags }}</div>
    </div>
    <div class="my-3">
        {{ mealInfo.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2" v-if="getData">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredient</h2>
        <ul>
          <template v-for="i in 20">
            <li v-if="mealInfo[`strIngredient${i}`]">
              {{ i }}. {{ mealInfo[`strIngredient${i}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="i in 20">
            <li v-if="mealInfo[`strMeasure${i}`]">
              {{ mealInfo[`strMeasure${i}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-4" v-if="getData">
        <YouTubeButton :href="mealInfo.strYoutube" v-if="getData"
          >Watch on YouTube</YouTubeButton
        >
        <a
          :href="mealInfo.strSource"
          target="_blank"
          class="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          View Original Source
        </a>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axios";
import YouTubeButton from "../components/YouTubeButton.vue";
const mealInfo = ref({});
let route = useRoute();
const getData = ref(false);
onMounted(() => {
  let mealId = route.params.id;
  let endpoint = `lookup.php?i=${mealId}`;
  axiosClient
    .get(endpoint)
    .then(({ data }) => {
      mealInfo.value = data.meals[0] || {};
      getData.value = true;
    })
    .catch((err) => console.log(err));
});
</script>
