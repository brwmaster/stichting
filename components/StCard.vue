<script setup lang="ts">
const props = defineProps<{
    imageUrl: string
    alt: string
}>()
</script>

<template>
  <div class="p-10">
    <img :src="props.imageUrl" :alt="props.alt" width="250px"/>
    <h3></h3>
  </div>
</template>

<style scoped></style>
