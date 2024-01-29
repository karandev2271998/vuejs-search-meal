<template>
  <a
    :href="href"
    target="_blank"
    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
  >
  <slot></slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
