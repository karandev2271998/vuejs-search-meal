<template>
  <div class="p-8 bg-gray-100 pb-0">
    <!--  Search meals by Keyword start  -->
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-grey-200 w-full"
      placeholder="Search for Meals"
      @change="getMealByKeyword"
    />
    <!--  Search meals by Keyword name end  -->
    <p v-if="false">Oops! This item is not exist in our database.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-5 gap-5 p-8" v-if="meals">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
      <MealList :meal="meal" :btnName="'YouTube'" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealList from "../components/MealList.vue";

let keyword = ref("");
let route = useRoute();
let meals = computed(() => store.state.searchedMeals);
function getMealByKeyword() {
  store.dispatch("searchMeal", keyword.value);
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    getMealByKeyword();
  }
});
</script>
