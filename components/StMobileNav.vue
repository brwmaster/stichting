<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    isMenuOpen: boolean;
  }>(),
  {
    isMenuOpen: false,
  }
);

// emits
const emit = defineEmits<{
  (e: "@closeMenu", isOpen: boolean): void;
}>();

const closeMenu = () => emit('@closeMenu', false)



</script>

<template>
  <div>
    <Transition name="slide-fade">
      <div
        v-if="props.isMenuOpen"
        class="h-screen w-screen z-50 bg-white"
      >
        <div class="flex flex-col items-center pt-16">
          <nuxt-link @click="closeMenu" class="pr-4 transition ease-in-out hover:text-primary duration-300" to="/"><p class="text-2xl leading-loose">Home</p></nuxt-link>
          <nuxt-link @click="closeMenu" class="pr-4 transition ease-in-out hover:text-primary duration-300" to="/over-ons"><p class="text-2xl leading-loose">Over ons</p></nuxt-link>
          <nuxt-link class="pr-4 transition ease-in-out hover:text-primary duration-300" to="/nieuws"><p class="text-2xl leading-loose">Nieuws</p></nuxt-link>
          <nuxt-link class="pr-4 transition ease-in-out hover:text-primary duration-300" to="/projecten"><p class="text-2xl leading-loose">Projecten</p></nuxt-link>
          <nuxt-link class="pr-4 transition ease-in-out hover:text-primary duration-300" to="/contact"><p class="text-2xl leading-loose">Contact</p></nuxt-link>
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
