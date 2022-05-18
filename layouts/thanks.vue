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

    <div class="slidev-layout thanks z-10">
      <div class="h-1/4 align-center flex">
        <div class="self-center">
          <div class="w-36 h-36 rounded-full" :style="style" />
        </div>
      </div>

      <div class="h-1/4">
        <h1 class="font-bold my-6">
          Спасибо<br />
          за внимание!
        </h1>
      </div>

      <div class="h-1/4 mt-20">
        <Separator />

        <slot name="description" />
      </div>
    </div>

    <Polygons />
  </div>
</template>
