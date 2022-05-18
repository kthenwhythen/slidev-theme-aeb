<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '@slidev/client/layoutHelper';

const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
});

const style = computed(() => handleBackground(props.image));
</script>

<template>
  <div class="flex h-full">
    <Sidebar />

    <div class="slidev-layout intro z-10">
      <div class="h-1/4 align-center flex">
        <div class="self-center">
          <slot name="title" />
        </div>
      </div>

      <div class="h-1/2 align-center flex">
        <div class="self-center">
          <slot name="content" />
        </div>
      </div>

      <div class="h-1/4">
        <slot name="description" />
      </div>
    </div>

    <div
      class="w-full w-full z-0 absolute inset-0 filter mix-blend-soft-light bg-primary opacity-25"
      :style="style"
    />
  </div>
</template>
