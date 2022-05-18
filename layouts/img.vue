<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '@slidev/client/layoutHelper';

const props = defineProps({
  image: {
    type: String,
  },
  backgroundSize: {
    type: String,
  },
});

const style = computed(() => handleBackground(props.image));
style.value['background-size'] = props.backgroundSize;
</script>

<template>
  <div class="flex h-full">
    <Sidebar />

    <div :class="`h-full z-0 absolute inset-0 ml-16`" :style="style" />
  </div>
</template>
