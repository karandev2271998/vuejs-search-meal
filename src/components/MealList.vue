<template>
  <div>
    <router-link :to="{ name: 'mealDetails', params: { id: meal.meal.idMeal } }">
      <img
        :src="meal.meal.strMealThumb"
        :alt="meal.meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text.
      </p>
      <div class="flex item-center justify-between">
        <you-tube-button :href="meal.meal.strYoutube">{{ meal.btnName }}</you-tube-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "./YouTubeButton.vue";
const meal = defineProps({
  meal: Object,
  btnName:  String,
});
</script>
