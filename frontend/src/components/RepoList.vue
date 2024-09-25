<template>
  <div class="lang-repositories">
    <h4 class="text-center text-lg bold bg-slate-700 text-white rounded p-2">
      <slot name="heading"></slot>
    </h4>
    <div class="details">
      <slot name="repositories"></slot>
    </div>
  </div>
</template>

<style scoped>
.lang-repositories {
  @apply basis-[20rem] border rounded shadow p-3 mb-3 max-h-60 overflow-y-auto;
}
</style>
