<template>
  <div class="lang-repositories">
    <h4 class="text-center text-lg bold bg-slate-700 text-white rounded p-2">
      <slot name="heading"></slot>
    </h4>
    <div class="details max-h-80 overflow-y-auto">
      <slot name="repositories"></slot>
    </div>
  </div>
</template>

<style scoped>
.lang-repositories {
  @apply flex-1 basis-[20rem] border rounded shadow-lg p-3;
}
</style>
