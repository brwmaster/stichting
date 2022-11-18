<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    isMenuOpen: boolean;
  }>(),
  {
    isMenuOpen: false,
  }
);
</script>

<template>
  <div>
    <Transition name="slide-fade">
      <div
        v-if="props.isMenuOpen"
        class="h-screen w-screen z-50 bg-white"
      >
        <div class="flex flex-col items-center pt-16">
          <nuxt-link class="pt-4 border-b-4 border-transparent hover:border-primary" to="/"><p class="leading-loose">Home</p></nuxt-link>
          <nuxt-link class="pt-4 border-b-4 border-transparent hover:border-primary" to="/"><p class="leading-loose">Over ons</p></nuxt-link>
          <nuxt-link class="pt-4 border-b-4 border-transparent hover:border-primary" to="/"><p class="leading-loose">Nieuws</p></nuxt-link>
          <nuxt-link class="pt-4 border-b-4 border-transparent hover:border-primary" to="/"><p class="leading-loose">Projecten</p></nuxt-link>
          <nuxt-link class="pt-4 border-b-4 border-transparent hover:border-primary" to="/"><p class="leading-loose">Contact</p></nuxt-link>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(220px);
  opacity: 0;
}
</style>
