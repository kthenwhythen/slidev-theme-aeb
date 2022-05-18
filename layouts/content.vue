<template>
  <div class="flex h-full">
    <Sidebar />

    <div class="slidev-layout content z-10">
      <slot />
    </div>
    <Polygons />
  </div>
</template>
