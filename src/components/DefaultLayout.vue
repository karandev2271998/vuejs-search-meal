<template>
  <div class="bg-gray-100 h-100">
    <navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import  Navbar from "./Navbar.vue";
</script>
