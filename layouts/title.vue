<template>
  <div class="flex h-full">
    <Sidebar />

    <div class="slidev-layout title z-10">
      <div class="h-3/4 align-center flex">
        <div class="self-center">
          <slot name="title" />
        </div>
      </div>

      <div class="h-1/4">
        <Separator />

        <slot name="description" />
      </div>
    </div>

    <Polygons />
  </div>
</template>
