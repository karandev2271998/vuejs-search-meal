<template>
  <header class="bg-white shadow h-16 flex justify-between items-center">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex item-center px-5 h-full mt-7"
      >Home</router-link
    >
    <div class="flex gap-3 items-center">
      <router-link
        :to="{ name: 'byName', params: {} }"
        class="inline-flex item-center px-2 h-full transition-colors hover:bg-purple-100"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter', params: {} }"
        class="inline-flex item-center px-2 h-full transition-colors hover:bg-purple-100"
        >Meals by Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex item-center px-2 h-full transition-colors hover:bg-purple-100"
        >Meals by Ingredients</router-link
      >
    </div>
  </header>
</template>