<template>
  <div class="flex flex-col p-8">
    <!--  Search meals by letter name start  -->
    <div class="flex justify-center gap-3 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
    <!--  Search meals by letter name end  -->
  </div>
</template>



<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axios";
const letters = computed(() => store.state.letters);
const ingredients = ref([]);
onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data;
});
</script>