<script setup lang="ts">
import { useContentful } from '~~/composables/useContentful';

const { client } = await useContentful()
const runtimeConfig = useRuntimeConfig()

const entries = await client.getEntries({ content_type: runtimeConfig.public.contentTypeNieuws,  order: '-sys.createdAt', limit: 4})

</script>

<template>
  <section class="pt-24 px-8 md:pt-32 bg-hero bg-cover h-[80vh] sm:h-[60vh] lg:h-[75vh] bg-center md:bg-top flex flex-col items-center justify-center">
    <div class="max-w-screen-md">      
      <h1 class="text-white text-center text-4xl md:text-5xl mb-4 md:mb-6">Stichting met uitgestrekte hand</h1>
      <p class="text-white text-sm md:text-md text-center leading-5">Laten we het goede doen, zonder op te geven, want als we niet verzwakken zullen we oogsten wanneer de tijd daarvoor gekomen is. Laten we dus, in de tijd die ons nog rest, voor iedereen het goede doen, vooral voor onze geloofsgenoten. (Galaten 6: 9 en 10)</p>
    </div>
  </section>
  <section class="flex justify-center mt-[-8rem]">
    <div v-for="entry in entries.items">
    <st-card :imageUrl="entry.fields.afbeelding.fields.file.url" :alt="entry.fields.afbeelding.fields.title" />
  </div>
  </section>
</template>

<style scoped></style>