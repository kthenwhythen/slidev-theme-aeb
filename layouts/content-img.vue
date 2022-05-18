<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '@slidev/client/layoutHelper';

const props = defineProps({
  image: {
    type: String,
  },
});

const style = computed(() => handleBackground(props.image));
</script>

<template>
  <div class="flex h-full">
    <Sidebar />

    <div class="slidev-layout content z-10">
      <slot />
    </div>

    <div
      class="w-full w-full z-0 absolute inset-0 filter mix-blend-soft-light bg-primary opacity-25"
      :style="style"
    />
  </div>
</template>
