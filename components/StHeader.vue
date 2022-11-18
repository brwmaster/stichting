<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
    return isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = (value: boolean): boolean => isMenuOpen.value = value

</script>

<template>
<header class="fixed h-16 md:h-24 w-full bg-white">
  <div class="px-4 flex justify-between items-center max-w-screen-xl min-w-screen-lg h-full mx-auto">
      <nuxt-link class="flex" to="/">
          <nuxt-img src="/images/logo.svg" alt="Het logo van Stichting met uitgestrekte hand." class="w-24 md:w-36" placeholder />
      </nuxt-link>
      <Icon :name="isMenuOpen ? 'mdi:close' : 'mdi:menu-open'" size="3em" class="text-primary sm:hidden" @click="toggleMenu"/>
      <st-nav class="hidden sm:inline-block"/>
  </div>
  <st-mobile-nav @@closeMenu="closeMenu($event)" :isMenuOpen="isMenuOpen"/>
</header>
</template>

<style scoped></style>



