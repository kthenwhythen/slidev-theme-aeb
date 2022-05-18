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
  </div>
</template>
