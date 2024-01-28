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
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <router-link to="/">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <div class="flex item-center justify-between">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-2 rounded border-2 border-red-600 text-white bg-red-500 hover:bg-red-600 transition-colors"
            >YouTube</a
          >
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import {useRoute} from "vue-router";
let keyword = ref("");
let route = useRoute();
let meals = computed(() => store.state.searchedMeals);
function getMealByKeyword() {
  store.dispatch("searchMeal", keyword.value);
}
onMounted(() => {
  keyword.value = route.params.name;
  if(keyword.value){
    getMealByKeyword();
  }
});
</script>