<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
    return isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
<header class="fixed h-16 md:h-24 w-full bg-white">
  <div class="px-4 flex justify-between items-center h-full">
      <nuxt-link class="flex" to="/">
          <nuxt-img src="/logo.svg" alt="Het logo van Stichting met uitgestrekte hand." class="w-24 md:w-36" placeholder />
      </nuxt-link>
      <Icon :name="isMenuOpen ? 'mdi:close' : 'mdi:menu-open'" size="3em" class="text-primary md:hidden" @click="toggleMenu"/>
  </div>
  <st-mobile-nav :isMenuOpen="isMenuOpen"/>
</header>
</template>

<style scoped></style>



