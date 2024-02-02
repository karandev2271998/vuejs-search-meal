<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
  </div>
  <div class="px-8 pb-3">
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
<Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

let keyword = ref("");
let route = useRoute();
let meals = computed(() => {
  return store.state.searchedMeals;
});

function getMealByKeyword() {
  if (keyword.value) {
    store.dispatch("searchMeal", keyword.value);
  }else{
    store.commit('setSearchedMeals', []);
  }
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    getMealByKeyword();
  }
});

</script>
