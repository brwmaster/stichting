<script setup lang="ts">

const props = withDefaults(defineProps<{
    isMenuOpen: boolean
}>(), {
    isMenuOpen: false
})

</script>

<template>
<div>
    <Transition>
        <div v-if="props.isMenuOpen" class="h-[50vh] w-screen z-50 bg-white">
        mobile menu
    </div>
    </Transition>
</div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
